window.MM = window.MM || {};

MM.render = (function () {
  let layerLinks = null;
  let layerNodes = null;
  let state = null;
  let data = null;

  const RIBBON_GAP = 4;
  const ROOT_BOX_W = 500;
  const ROOT_BOX_H = 150;
  const ROOT_GLOW_PAD = 60;

  function init(layers, appState, appData) {
    layerLinks = layers.links;
    layerNodes = layers.nodes;
    state = appState;
    data = appData;
    if (!state.visitedNodes) state.visitedNodes = new Set();
  }

  function calculateBBox(nodes) {
    if (!nodes || nodes.length === 0) return { x: 0, y: 0, w: 100, h: 100 };
    let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
    nodes.forEach(function (n) {
      minX = Math.min(minX, n.x - n.w / 2);
      minY = Math.min(minY, n.y - n.h / 2);
      maxX = Math.max(maxX, n.x + n.w / 2);
      maxY = Math.max(maxY, n.y + n.h / 2);
    });
    return { x: minX, y: minY, w: maxX - minX, h: maxY - minY };
  }

  function getWireColor(branch, depth) {
    const colors = { tech: [239, 68, 68], app: [245, 158, 11], cap: [59, 130, 246] };
    const base = colors[branch] || [150, 150, 150];
    const factor = Math.max(0.4, 1 - (depth - 1) * 0.15);
    return 'rgb(' + Math.round(base[0] * factor) + ', ' + Math.round(base[1] * factor) + ', ' + Math.round(base[2] * factor) + ')';
  }

  function drawWires(layoutResult) {
    layerLinks.innerHTML = '';
    const parentChildMap = {};
    layoutResult.links.forEach(function (link) {
      const sourceKey = link.source.x + ',' + link.source.y;
      if (!parentChildMap[sourceKey]) parentChildMap[sourceKey] = [];
      parentChildMap[sourceKey].push(link);
    });

    for (const sourceKey in parentChildMap) {
      const linksInBundle = parentChildMap[sourceKey];
      const N = linksInBundle.length;
      linksInBundle.forEach(function (link, index) {
        const offset = (index - (N - 1) / 2) * RIBBON_GAP;
        const targetNode = layoutResult.nodes.find(function (n) {
          return n.x === link.target.x && n.y === link.target.y;
        });
        const depth = targetNode ? targetNode.depth : 1;
        const color = getWireColor(link.branch, depth);
        const isTargetVisited = targetNode && state.visitedNodes.has(targetNode.id);

        let pathD = '';
        let sx = link.source.x;
        let sy = link.source.y;
        const tx = link.target.x;
        const ty = link.target.y;

        const isRootLink = sx === 0 && sy === 0;
        if (isRootLink) {
          if (link.branch === 'tech') { sx = -ROOT_BOX_W / 2; sy = 0; }
          else if (link.branch === 'app' || link.branch === 'apps') { sx = ROOT_BOX_W / 2; sy = 0; }
          else if (link.branch === 'cap' || link.branch === 'caps') { sx = 0; sy = ROOT_BOX_H / 2; }
        }

        if (link.branch === 'tech' || link.branch === 'app' || link.branch === 'apps') {
          const dx = tx - sx;
          const cpx = dx / 2;
          const syOffset = sy + offset;
          pathD = 'M ' + sx + ',' + syOffset + ' C ' + (sx + cpx) + ',' + syOffset + ' ' + (tx - cpx) + ',' + ty + ' ' + tx + ',' + ty;
        } else if (link.branch === 'cap' || link.branch === 'caps') {
          const dy = ty - sy;
          const cpy = dy / 2;
          const sxOffset = sx + offset;
          pathD = 'M ' + sxOffset + ',' + sy + ' C ' + sxOffset + ',' + (sy + cpy) + ' ' + tx + ',' + (ty - cpy) + ' ' + tx + ',' + ty;
        }

        if (!pathD) return;

        // Glowing underlying wire layer
        const glowPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        glowPath.setAttribute('d', pathD);
        glowPath.setAttribute('class', 'wire-glow' + (isTargetVisited ? ' lit' : ''));
        glowPath.setAttribute('stroke', color);
        glowPath.setAttribute('stroke-width', '4');
        layerLinks.appendChild(glowPath);

        // Core wire strand
        const strandPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        strandPath.setAttribute('d', pathD);
        strandPath.setAttribute('class', 'wire-strand');
        strandPath.setAttribute('stroke', color);
        strandPath.setAttribute('stroke-width', '1.5');
        layerLinks.appendChild(strandPath);
      });
    }
  }

  function createTitleHTML() {
    return (
      '<div xmlns="http://www.w3.org/1999/xhtml" class="ai-stage">' +
      '<style>' +
      '.ai-stage { width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; }' +
      '.ai-box { position: relative; width: ' + ROOT_BOX_W + 'px; height: ' + ROOT_BOX_H + 'px; }' +
      '.ai-ring { position: absolute; inset: 0; }' +
      '.ai-ring.glow { filter: blur(14px); opacity: 0.85; }' +
      '.ai-edge {' +
      '  position: absolute; inset: 0; padding: 6px; box-sizing: border-box; border-radius: 10px; overflow: hidden;' +
      '  -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);' +
      '  -webkit-mask-composite: xor; mask: linear-gradient(#000 0 0) content-box exclude, linear-gradient(#000 0 0);' +
      '}' +
      '.ai-edge i {' +
      '  position: absolute; top: 50%; left: 50%; width: 900px; height: 900px; margin: -450px 0 0 -450px;' +
      '  background: conic-gradient(#ff2a2a 0deg, #2a5cff 120deg, #ffc400 240deg, #ff2a2a 360deg);' +
      '  animation: ai-spin 5s linear infinite;' +
      '}' +
      '@keyframes ai-spin { to { transform: rotate(360deg); } }' +
      '.ai-inner { position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; }' +
      '.ai-title { position: relative; display: inline-block; }' +
      '.ai-txt {' +
      '  display: block; font-family: system-ui, -apple-system, sans-serif; font-weight: 800; font-size: 38px; line-height: 1.05;' +
      '  letter-spacing: 2px; text-transform: uppercase; text-align: center; white-space: nowrap;' +
      '  background: linear-gradient(100deg, #ff4d4d 0%, #4d7dff 33%, #ffd23f 66%, #ff4d4d 100%);' +
      '  background-size: 300% 100%; -webkit-background-clip: text; background-clip: text;' +
      '  -webkit-text-fill-color: transparent; color: transparent; animation: ai-shift 6s linear infinite;' +
      '}' +
      '.ai-txt.glow { position: absolute; inset: 0; filter: blur(10px); opacity: 0.9; }' +
      '@keyframes ai-shift { to { background-position: -300% 0; } }' +
      '</style>' +
      '<div class="ai-box">' +
      '<div class="ai-ring glow"><div class="ai-edge"><i></i></div></div>' +
      '<div class="ai-ring"><div class="ai-edge"><i></i></div></div>' +
      '<div class="ai-inner">' +
      '<div class="ai-title">' +
      '<span class="ai-txt glow" aria-hidden="true">Artificial<br>Intelligence</span>' +
      '<span class="ai-txt">Artificial<br>Intelligence</span>' +
      '</div>' +
      '</div>' +
      '</div>' +
      '</div>'
    );
  }

  function draw(layoutResult) {
    layerNodes.innerHTML = '';
    drawWires(layoutResult);

    layoutResult.nodes.forEach(function (n) {
      const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
      g.setAttribute('transform', 'translate(' + n.x + ', ' + n.y + ')');

      const hasChildren = n.data.children && n.data.children.length > 0;
      const canToggle = hasChildren && (state.goDeeper || n.data.children.some(function (c) { return c.tier === 1; }));
      const isExpanded = state.expandedNodes.has(n.id);
      const isVisited = state.visitedNodes && state.visitedNodes.has(n.id);

      let classes = 'mm-node branch-' + n.branch;
      if (n.data.daily) classes += ' daily';
      if (n.depth === 0) classes += ' branch-root';
      else if (n.depth === 1) classes += ' branch-aspect';
      if (canToggle) classes += ' can-expand';
      if (isExpanded) classes += ' expanded';
      if (isVisited) classes += ' visited';

      g.setAttribute('class', classes);
      g.setAttribute('data-id', n.id);

      if (n.depth === 0) {
        // Render Central foreignObject Node
        const fo = document.createElementNS('http://www.w3.org/2000/svg', 'foreignObject');
        const w = ROOT_BOX_W + ROOT_GLOW_PAD * 2;
        const h = ROOT_BOX_H + ROOT_GLOW_PAD * 2;
        fo.setAttribute('x', -w / 2);
        fo.setAttribute('y', -h / 2);
        fo.setAttribute('width', w);
        fo.setAttribute('height', h);
        fo.setAttribute('overflow', 'visible');
        fo.innerHTML = createTitleHTML();
        g.appendChild(fo);
      } else {
        // Sub-nodes styling and layout
        const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        rect.setAttribute('class', 'mm-node-rect');
        rect.setAttribute('x', -n.w / 2);
        rect.setAttribute('y', -n.h / 2);
        rect.setAttribute('width', n.w);
        rect.setAttribute('height', n.h);
        g.appendChild(rect);

        const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        text.setAttribute('class', 'mm-label');
        text.setAttribute('x', 0);

        const lines = n.data._wrappedText || [n.data.label];
        const lineHeight = n.depth === 1 ? 24 : 18;
        const totalTextH = lines.length * lineHeight;
        const startY = -totalTextH / 2 + lineHeight / 2;

        lines.forEach(function (line, i) {
          const tspan = document.createElementNS('http://www.w3.org/2000/svg', 'tspan');
          tspan.setAttribute('x', 0);
          tspan.setAttribute('y', startY + i * lineHeight);
          tspan.textContent = line;
          text.appendChild(tspan);
        });
        g.appendChild(text);

        // Info Button Group (ⓘ)
        const infoGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
        infoGroup.setAttribute('class', 'mm-info-btn-group');
        infoGroup.setAttribute('transform', 'translate(' + (n.w / 2 - 18) + ', ' + (-n.h / 2 + 18) + ')');

        const infoHitBox = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        infoHitBox.setAttribute('x', -16);
        infoHitBox.setAttribute('y', -16);
        infoHitBox.setAttribute('width', 32);
        infoHitBox.setAttribute('height', 32);
        infoHitBox.setAttribute('fill', 'transparent');
        infoGroup.appendChild(infoHitBox);

        const infoIcon = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        infoIcon.setAttribute('class', 'mm-toggle');
        infoIcon.setAttribute('x', 0);
        infoIcon.setAttribute('y', 5);
        infoIcon.setAttribute('text-anchor', 'middle');
        infoIcon.setAttribute('fill', '#94a3b8');
        infoIcon.textContent = 'ⓘ';
        infoGroup.appendChild(infoIcon);

        const triggerPanel = function (e) {
          e.stopPropagation();
          markNodeVisited(n.id);
          if (window.MM && window.MM.panel && window.MM.panel.show) {
            window.MM.panel.show(n.data);
          }
        };

        infoGroup.addEventListener('pointerdown', triggerPanel);
        g.appendChild(infoGroup);

        // +/- Badge for expandability
        if (canToggle) {
          const pos = n.branch === 'tech' ? [-n.w / 2, 0]
                    : (n.branch === 'app' || n.branch === 'apps') ? [n.w / 2, 0]
                    : [0, n.h / 2];
          const badge = document.createElementNS('http://www.w3.org/2000/svg', 'g');
          badge.setAttribute('class', 'mm-badge');
          badge.setAttribute('transform', 'translate(' + pos[0] + ', ' + pos[1] + ')');

          const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
          circle.setAttribute('r', 9);

          const sign = document.createElementNS('http://www.w3.org/2000/svg', 'text');
          sign.textContent = isExpanded ? '–' : '+';

          badge.appendChild(circle);
          badge.appendChild(sign);
          g.appendChild(badge);
        }

        // Main Node Interaction
        const handleNodeClick = function (e) {
          e.stopPropagation();
          markNodeVisited(n.id);

          if (canToggle) {
            handleToggleExpand(n.id);
          } else {
            if (window.MM && window.MM.panel && window.MM.panel.show) {
              window.MM.panel.show(n.data);
            }
          }
        };

        g.addEventListener('pointerdown', handleNodeClick);
      }

      layerNodes.appendChild(g);
    });
  }

  function markNodeVisited(nodeId) {
    if (state.visitedNodes) {
      state.visitedNodes.add(nodeId);
    }
    if (MM.missions && MM.missions.checkNodeVisit) {
      MM.missions.checkNodeVisit(nodeId);
    }
  }

  function handleToggleExpand(nodeId) {
    if (state.expandedNodes.has(nodeId)) {
      state.expandedNodes.delete(nodeId);
      collapseDescendants(nodeId);
    } else {
      state.expandedNodes.add(nodeId);
    }

    if (MM.main && MM.main.runLayoutAndRender) {
      MM.main.runLayoutAndRender();
    }
  }

  function collapseDescendants(nodeId) {
    const node = findNodeById(data, nodeId);
    if (!node || !node.children) return;

    const collapseRecursive = function (children) {
      children.forEach(function (child) {
        state.expandedNodes.delete(child.id);
        if (child.children) collapseRecursive(child.children);
      });
    };
    collapseRecursive(node.children);
  }

  function findNodeById(root, id) {
    if (root.id === id) return root;
    if (!root.children) return null;
    for (let i = 0; i < root.children.length; i++) {
      const found = findNodeById(root.children[i], id);
      if (found) return found;
    }
    return null;
  }

  return {
    init: init,
    draw: draw,
    calculateBBox: calculateBBox,
    findNodeById: findNodeById
  };
})();