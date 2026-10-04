window.MM = window.MM || {};

MM.panel = (function () {
  let panelEl = null;

  function init() {
    panelEl = document.getElementById('detail-panel') || document.querySelector('.side-panel');
    const closeBtn = document.getElementById('btn-close-panel') || document.querySelector('.panel-close-btn');
    if (closeBtn) {
      closeBtn.addEventListener('click', hide);
    }
  }

  function safeArray(arr) {
    return Array.isArray(arr) ? arr : [];
  }

  function show(nodeData) {
    if (!nodeData) return;
    if (!panelEl) {
      panelEl = document.getElementById('detail-panel') || document.querySelector('.side-panel');
    }
    if (!panelEl) return;

    // Title & Description (Part 3: One plain sentence)[cite: 29]
    const titleEl = document.getElementById('panel-title');
    const descEl = document.getElementById('panel-desc');
    if (titleEl) titleEl.textContent = nodeData.label || 'Details';
    if (descEl) descEl.textContent = nodeData.description || nodeData.summary || nodeData.desc || 'No description available.';

    // How it works: 3-step strip[cite: 29]
    const howSec = document.getElementById('panel-how');
    const howContainer = document.getElementById('panel-how-steps');
    const steps = safeArray(nodeData.how || nodeData.howItWorks);
    if (howSec && howContainer) {
      if (steps.length > 0) {
        howContainer.innerHTML = steps
          .map(function (step, idx) {
            const stepText = typeof step === 'string' ? step : (step.text || '');
            return (
              '<div class="step-item">' +
                '<span class="step-num">' + (idx + 1) + '.</span>' +
                '<span class="step-text">' + escapeHTML(stepText) + '</span>' +
              '</div>'
            );
          })
          .join('');
        howSec.classList.remove('hidden');
      } else {
        howSec.classList.add('hidden');
      }
    }

    // You've seen it in: chips[cite: 29]
    const seenSec = document.getElementById('panel-seen');
    const seenContainer = document.getElementById('panel-seen-chips');
    const seenItems = safeArray(nodeData.seenIn || nodeData.seenin);
    if (seenSec && seenContainer) {
      if (seenItems.length > 0) {
        seenContainer.innerHTML =
          '<div class="chip-container">' +
          seenItems
            .map(function (item) {
              return '<span class="chip-pill">' + escapeHTML(item) + '</span>';
            })
            .join('') +
          '</div>';
        seenSec.classList.remove('hidden');
      } else {
        seenSec.classList.add('hidden');
      }
    }

    // Did you know?: surprising fact line[cite: 29]
    const factSec = document.getElementById('panel-fact');
    const factText = document.getElementById('panel-fact-text');
    const fact = nodeData.fact || nodeData.didYouKnow;
    if (factSec && factText) {
      if (fact) {
        factText.textContent = fact;
        factSec.classList.remove('hidden');
      } else {
        factSec.classList.add('hidden');
      }
    }

    panelEl.classList.remove('hidden');
  }

  function hide() {
    if (panelEl) {
      panelEl.classList.add('hidden');
    }
  }

  function escapeHTML(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  return { 
    init: init, 
    show: show, 
    hide: hide 
  };
})();