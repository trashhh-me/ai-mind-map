window.MM = window.MM || {};

MM.hints = (function () {
  const IDLE_MS = 6000; // Show hints after 6 seconds of inactivity[cite: 29]
  let el = null;
  let timer = null;

  function build() {
    el = document.getElementById('hint-layer');
    if (!el) {
      el = document.createElement('div');
      el.id = 'hint-layer';
      document.body.appendChild(el);
    }
    el.innerHTML =
      '<div class="hint-tap">' +
      '<i class="ripple"></i>' +
      '<i class="ripple r2"></i>' +
      '<i class="dot"></i>' +
      '<span class="lbl">Tap to open</span>' +
      '</div>' +
      '<div class="hint-pinch">' +
      '<i class="f f1"></i>' +
      '<i class="f f2"></i>' +
      '<span>Pinch or scroll to zoom</span>' +
      '</div>';
  }

  function show() {
    if (!el) return;
    
    // Target the first unopened aspect node or any expandable closed node[cite: 29]
    const targetNode =
      document.querySelector('.branch-aspect.can-expand:not(.expanded)') ||
      document.querySelector('.can-expand:not(.expanded)');
    
    if (!targetNode) return; // Everything open: nothing to show[cite: 29]

    const rect = targetNode.getBoundingClientRect();
    const tapEl = el.querySelector('.hint-tap');
    if (tapEl) {
      tapEl.style.left = (rect.left + rect.width / 2) + 'px';
      tapEl.style.top = (rect.top + rect.height / 2) + 'px';
    }
    el.classList.add('on');
  }

  function hide() {
    if (el) {
      el.classList.remove('on');
    }
  }

  function poke() {
    hide();
    clearTimeout(timer);
    timer = setTimeout(show, IDLE_MS);
  }

  function init() {
    build();
    ['pointerdown', 'wheel', 'keydown', 'touchstart'].forEach(function (ev) {
      document.addEventListener(ev, poke, { passive: true, capture: true });
    });
    poke();
  }

  return {
    init: init,
    poke: poke,
    show: show,
    hide: hide
  };
})();