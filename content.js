let currentTooltip = null;

document.addEventListener('mouseover', handleMouseOver);
document.addEventListener('mouseout', handleMouseOut);

function handleMouseOver(event) {
  const link = event.target.closest('a');

  if (!link || !link.href) {
    return;
  }

  // Don't scan javascript: or mailto: links
  if (link.href.startsWith('javascript:') || link.href.startsWith('mailto:')) {
    return;
  }

  // Create tooltip
  currentTooltip = createTooltip(link);
  document.body.appendChild(currentTooltip);

  // Position tooltip
  const rect = link.getBoundingClientRect();
  currentTooltip.style.left = `${rect.left + window.scrollX}px`;
  currentTooltip.style.top = `${rect.bottom + window.scrollY + 5}px`;

  // Start scanning
  chrome.runtime.sendMessage(
    { type: 'SCAN_URL', url: link.href },
    (response) => {
      if (currentTooltip) {
        updateTooltip(currentTooltip, response);
      }
    }
  );
}

function handleMouseOut(event) {
  const link = event.target.closest('a');

  if (link && currentTooltip) {
    currentTooltip.remove();
    currentTooltip = null;
  }
}

function createTooltip(link) {
  const tooltip = document.createElement('div');
  tooltip.className = 'vt-shield-tooltip vt-shield-scanning';
  tooltip.textContent = 'Memindai...';
  return tooltip;
}

function updateTooltip(tooltip, response) {
  tooltip.classList.remove('vt-shield-scanning');

  if (response.status === 'error') {
    tooltip.classList.add('vt-shield-error');
    tooltip.textContent = 'Error: ' + response.message;
    return;
  }

  const { malicious, suspicious } = response.stats;

  if (malicious > 0) {
    tooltip.classList.add('vt-shield-danger');
    tooltip.textContent = `⚠️ Bahaya (${malicious} deteksi)`;
  } else if (suspicious > 0) {
    tooltip.classList.add('vt-shield-suspicious');
    tooltip.textContent = `⚡ Mencurigakan (${suspicious} deteksi)`;
  } else {
    tooltip.classList.add('vt-shield-safe');
    tooltip.textContent = '✓ Aman';
  }
}
