document.addEventListener('DOMContentLoaded', async () => {
  const statusTitle = document.getElementById('status-title');
  const statusUrl = document.getElementById('status-url');
  const statMalicious = document.getElementById('stat-malicious');
  const statSuspicious = document.getElementById('stat-suspicious');
  const statHarmless = document.getElementById('stat-harmless');

  try {
    // Get active tab
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    if (!tab || !tab.url) {
      statusTitle.textContent = 'Tidak dapat mengambil URL';
      statusTitle.className = '';
      statusUrl.textContent = 'Tab tidak valid';
      return;
    }

    statusUrl.textContent = tab.url;

    // Send message to background script to scan URL
    chrome.runtime.sendMessage(
      { type: 'SCAN_URL', url: tab.url },
      (response) => {
        if (response.status === 'error') {
          statusTitle.textContent = 'Error';
          statusTitle.className = '';
          statusUrl.textContent = response.message;
          statMalicious.textContent = '-';
          statSuspicious.textContent = '-';
          statHarmless.textContent = '-';
          return;
        }

        const { malicious, suspicious, harmless } = response.stats;

        // Update statistics
        statMalicious.textContent = malicious;
        statSuspicious.textContent = suspicious;
        statHarmless.textContent = harmless;

        // Update status title
        statusTitle.classList.remove('safe', 'danger', 'suspicious');

        if (malicious > 0) {
          statusTitle.textContent = '⚠️ Halaman Berbahaya';
          statusTitle.classList.add('danger');
        } else if (suspicious > 0) {
          statusTitle.textContent = '⚡ Halaman Mencurigakan';
          statusTitle.classList.add('suspicious');
        } else {
          statusTitle.textContent = '✓ Halaman Aman';
          statusTitle.classList.add('safe');
        }
      }
    );
  } catch (error) {
    statusTitle.textContent = 'Error';
    statusUrl.textContent = error.message;
    statMalicious.textContent = '-';
    statSuspicious.textContent = '-';
    statHarmless.textContent = '-';
  }
});
