const VT_API_KEY = '2087d451da525cff3aa6a49eabcb7b855623c865395c369de2ba42a2e2ccf144';
const CACHE_DURATION = 10 * 60 * 1000; // 10 minutes

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.type === 'SCAN_URL') {
    scanUrlWithVirusTotal(request.url)
      .then(result => sendResponse(result))
      .catch(error => sendResponse({ status: 'error', message: error.message }));
    return true; // Keep channel open for async response
  }
});

async function scanUrlWithVirusTotal(url) {
  try {
    // Check cache first
    const cachedResult = await checkCache(url);
    if (cachedResult) {
      return cachedResult;
    }

    // Step 1: Submit URL for analysis
    const formData = new FormData();
    formData.append('url', url);

    const submitResponse = await fetch('https://www.virustotal.com/api/v3/urls', {
      method: 'POST',
      headers: {
        'x-apikey': VT_API_KEY
      },
      body: formData
    });

    if (!submitResponse.ok) {
      if (submitResponse.status === 401) {
        throw new Error('Invalid API key');
      }
      if (submitResponse.status === 429) {
        throw new Error('Rate limit exceeded');
      }
      throw new Error(`API error: ${submitResponse.status}`);
    }

    const submitData = await submitResponse.json();
    const analysisId = submitData.data.id;

    // Step 2: Get analysis results
    const analysisResponse = await fetch(`https://www.virustotal.com/api/v3/analyses/${analysisId}`, {
      method: 'GET',
      headers: {
        'x-apikey': VT_API_KEY
      }
    });

    if (!analysisResponse.ok) {
      throw new Error(`Analysis error: ${analysisResponse.status}`);
    }

    const analysisData = await analysisResponse.json();
    const stats = analysisData.data.attributes.stats;

    const result = {
      status: 'success',
      stats: {
        malicious: stats.malicious || 0,
        suspicious: stats.suspicious || 0,
        harmless: stats.harmless || 0
      }
    };

    // Save to cache
    await saveToCache(url, result);

    return result;
  } catch (error) {
    return {
      status: 'error',
      message: error.message
    };
  }
}

async function checkCache(url) {
  return new Promise((resolve) => {
    chrome.storage.local.get([url], (result) => {
      if (result[url]) {
        const cached = result[url];
        const now = Date.now();
        if (now - cached.timestamp < CACHE_DURATION) {
          resolve(cached.data);
        } else {
          resolve(null);
        }
      } else {
        resolve(null);
      }
    });
  });
}

async function saveToCache(url, data) {
  return new Promise((resolve) => {
    chrome.storage.local.set({
      [url]: {
        data: data,
        timestamp: Date.now()
      }
    }, resolve);
  });
}
