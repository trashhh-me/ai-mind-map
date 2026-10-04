window.MM = window.MM || {};
MM.viewport = (function () {
  let svgEl = null;
  let worldEl = null;

  let tx = 0;
  let ty = 0;
  let scale = 1;
  const MIN_SCALE = 0.1;
  const MAX_SCALE = 4.0;

  const pointers = new Map();
  let isPanning = false;
  let isPinching = false;
  let lastPanX = 0;
  let lastPanY = 0;
  let initialPinchDist = 0;
  let initialPinchScale = 1;

  let animationId = null;

  function init(svg, world) {
    svgEl = svg;
    worldEl = world;

    const rect = svgEl.getBoundingClientRect();
    tx = rect.width / 2;
    ty = rect.height / 2.5;
    applyTransform();

    svgEl.addEventListener('pointerdown', onPointerDown);
    svgEl.addEventListener('pointermove', onPointerMove);
    svgEl.addEventListener('pointerup', onPointerUp);
    svgEl.addEventListener('pointercancel', onPointerUp);
    svgEl.addEventListener('wheel', onWheel, { passive: false });
  }

  function applyTransform() {
    if (worldEl) {
      worldEl.setAttribute('transform', `translate(${tx}, ${ty}) scale(${scale})`);
    }
  }

  function zoomAt(cx, cy, factor) {
    let newScale = scale * factor;
    newScale = Math.max(MIN_SCALE, Math.min(MAX_SCALE, newScale));
    const ratio = newScale / scale;
    tx = cx - (cx - tx) * ratio;
    ty = cy - (cy - ty) * ratio;
    scale = newScale;
    applyTransform();
  }

  function onPointerDown(e) {
    if (animationId) {
      cancelAnimationFrame(animationId);
      animationId = null;
    }
    pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });

    if (pointers.size === 1) {
      isPanning = true;
      isPinching = false;
      lastPanX = e.clientX;
      lastPanY = e.clientY;
    } else if (pointers.size === 2) {
      isPanning = false;
      isPinching = true;
      const pts = Array.from(pointers.values());
      initialPinchDist = getDist(pts[0], pts[1]);
      initialPinchScale = scale;
    }
  }

  function onPointerMove(e) {
    if (!pointers.has(e.pointerId)) return;
    pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });

    if (isPanning && pointers.size === 1) {
      const dx = e.clientX - lastPanX;
      const dy = e.clientY - lastPanY;
      tx += dx;
      ty += dy;
      lastPanX = e.clientX;
      lastPanY = e.clientY;
      applyTransform();
    } else if (isPinching && pointers.size === 2) {
      const pts = Array.from(pointers.values());
      const currentDist = getDist(pts[0], pts[1]);
      if (initialPinchDist === 0) return;
      const factor = currentDist / initialPinchDist;

      const cx = (pts[0].x + pts[1].x) / 2;
      const cy = (pts[0].y + pts[1].y) / 2;

      let newScale = initialPinchScale * factor;
      newScale = Math.max(MIN_SCALE, Math.min(MAX_SCALE, newScale));
      const safeFactor = newScale / scale;
      zoomAt(cx, cy, safeFactor);
    }
  }

  function onPointerUp(e) {
    pointers.delete(e.pointerId);
    if (pointers.size === 0) {
      isPanning = false;
      isPinching = false;
    } else if (pointers.size === 1) {
      isPinching = false;
      isPanning = true;
      const pt = pointers.values().next().value;
      lastPanX = pt.x;
      lastPanY = pt.y;
    }
  }

  function getDist(p1, p2) {
    const dx = p1.x - p2.x;
    const dy = p1.y - p2.y;
    return Math.sqrt(dx * dx + dy * dy);
  }

  function onWheel(e) {
    e.preventDefault();
    const factor = e.deltaY < 0 ? 1.1 : 0.9;
    zoomAt(e.clientX, e.clientY, factor);
  }

  function zoomIn() {
    if (!svgEl) return;
    const rect = svgEl.getBoundingClientRect();
    zoomAt(rect.width / 2, rect.height / 2, 1.3);
  }

  function zoomOut() {
    if (!svgEl) return;
    const rect = svgEl.getBoundingClientRect();
    zoomAt(rect.width / 2, rect.height / 2, 0.7);
  }

  function flyTo(bbox, duration = 600) {
    if (!svgEl) return;
    if (animationId) cancelAnimationFrame(animationId);

    const rect = svgEl.getBoundingClientRect();
    const vw = rect.width;
    const vh = rect.height;

    const padding = 0.8;
    const targetScale = Math.min(vw / bbox.w, vh / bbox.h) * padding;
    const clampedScale = Math.max(MIN_SCALE, Math.min(MAX_SCALE, targetScale));

    const targetTx = vw / 2 - (bbox.x + bbox.w / 2) * clampedScale;
    const targetTy = vh / 2 - (bbox.y + bbox.h / 2) * clampedScale;

    const startTx = tx;
    const startTy = ty;
    const startScale = scale;
    const startTime = performance.now();

    function animate(time) {
      let t = (time - startTime) / duration;
      if (t >= 1) t = 1;

      const ease = t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

      tx = startTx + (targetTx - startTx) * ease;
      ty = startTy + (targetTy - startTy) * ease;
      scale = startScale + (clampedScale - startScale) * ease;
      applyTransform();

      if (t < 1) {
        animationId = requestAnimationFrame(animate);
      } else {
        animationId = null;
      }
    }

    animationId = requestAnimationFrame(animate);
  }

  function resetView() {
    if (!svgEl) return;
    const defaultBBox = { x: -800, y: -400, w: 1600, h: 1000 };
    flyTo(defaultBBox, 800);
  }

  function getCurrentTransform() {
    return { tx, ty, scale };
  }

  return {
    init: init,
    zoomIn: zoomIn,
    zoomOut: zoomOut,
    resetView: resetView,
    flyTo: flyTo,
    getCurrentTransform: getCurrentTransform
  };
})();