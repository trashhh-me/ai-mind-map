window.MM = window.MM || {};

MM.main = (function () {
  const IDLE_TIMEOUT = 90000;
  let idleTimer = null;

  const state = {
    expandedNodes: new Set(['ai', 'tech', 'app', 'cap']),
    visitedNodes: new Set(),
    goDeeper: false,
    dailyMode: false
  };

  function init() {
    const data = window.MINDMAP_DATA;
    if (!data) return;

    const svg = document.getElementById('mindmap-svg');
    const world = document.getElementById('world');
    if (!svg || !world) return;

    if (MM.viewport && MM.viewport.init) {
      MM.viewport.init(svg, world);
    }

    if (MM.panel && MM.panel.init) {
      MM.panel.init();
    }

    const layers = {
      links: document.getElementById('layer-links'),
      nodes: document.getElementById('layer-nodes')
    };

    if (MM.render && MM.render.init) {
      MM.render.init(layers, state, data);
    }

    if (MM.missions && MM.missions.init) {
      MM.missions.init();
    }

    // Attach UI Controls for Reset, Collapse/Clear All, and Zoom
    bindUIControls();

    runLayoutAndRender(true);

    if (MM.hints && MM.hints.init) {
      MM.hints.init();
    }

    resetIdleTimer();

    ['pointerdown', 'touchstart', 'wheel', 'keydown'].forEach(function (ev) {
      document.addEventListener(ev, resetIdleTimer, { passive: true, capture: true });
    });
  }

  function bindUIControls() {
    // Reset View Button
    const resetBtn = document.getElementById('btn-reset-view') || document.getElementById('btn-reset');
    if (resetBtn) {
      resetBtn.addEventListener('click', function (e) {
        e.preventDefault();
        if (MM.viewport && MM.viewport.resetView) {
          MM.viewport.resetView();
        }
      });
    }

    // Clear All / Collapse All Button
    const collapseBtn = document.getElementById('btn-collapse-all') || document.getElementById('btn-clear-all');
    if (collapseBtn) {
      collapseBtn.addEventListener('click', function (e) {
        e.preventDefault();
        // Collapse to root branches only
        state.expandedNodes = new Set(['ai']);
        runLayoutAndRender();
        if (MM.viewport && MM.viewport.resetView) {
          MM.viewport.resetView();
        }
      });
    }

    // Zoom Controls
    const zoomInBtn = document.getElementById('btn-zoom-in');
    if (zoomInBtn) {
      zoomInBtn.addEventListener('click', function (e) {
        e.preventDefault();
        if (MM.viewport && MM.viewport.zoomBy) MM.viewport.zoomBy(1.2);
      });
    }

    const zoomOutBtn = document.getElementById('btn-zoom-out');
    if (zoomOutBtn) {
      zoomOutBtn.addEventListener('click', function (e) {
        e.preventDefault();
        if (MM.viewport && MM.viewport.zoomBy) MM.viewport.zoomBy(0.8);
      });
    }
  }

  function runLayoutAndRender(isInitial = false) {
    if (!MM.layout || !MM.render) return;
    const layoutResult = MM.layout.compute(window.MINDMAP_DATA, state);
    MM.render.draw(layoutResult, isInitial);
  }

  function resetIdleTimer() {
    clearTimeout(idleTimer);
    if (MM.hints) {
      if (MM.hints.hide) MM.hints.hide();
      if (MM.hints.poke) MM.hints.poke();
    }
    idleTimer = setTimeout(resetKiosk, IDLE_TIMEOUT);
  }

  function resetKiosk() {
    state.expandedNodes = new Set(['ai', 'tech', 'app', 'cap']);
    state.visitedNodes = new Set();

    if (MM.panel && MM.panel.hide) {
      MM.panel.hide();
    }

    runLayoutAndRender();

    if (MM.viewport && MM.viewport.resetView) {
      MM.viewport.resetView();
    }

    if (MM.missions && MM.missions.renderProgressCounters) {
      MM.missions.renderProgressCounters();
    }

    if (MM.hints && MM.hints.poke) {
      MM.hints.poke();
    }
  }

  return {
    init: init,
    runLayoutAndRender: runLayoutAndRender,
    resetKiosk: resetKiosk,
    getState: function () {
      return state;
    }
  };
})();

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', MM.main.init);
} else {
  MM.main.init();
}