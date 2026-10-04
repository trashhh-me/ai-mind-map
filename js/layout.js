window.MM = window.MM || {};
MM.layout = (function () {
  const H_STEP = 320;
  const V_STEP = 240;
  const GAP = 20;

  function wrapText(text, maxChars) {
    if (!text) return [''];
    const words = text.split(' ');
    const lines = [];
    let currentLine = '';
    words.forEach((word) => {
      if ((currentLine + ' ' + word).trim().length > maxChars) {
        if (currentLine) lines.push(currentLine.trim());
        currentLine = word;
      } else {
        currentLine += ' ' + word;
      }
    });
    if (currentLine) lines.push(currentLine.trim());
    return lines;
  }

  function getSize(node, depth) {
    let w, h;
    if (depth === 0) {
      w = 500;
      h = 150;
    } else if (depth === 1) {
      const lines = wrapText(node.label, 20);
      node._wrappedText = lines;
      const maxLineLen = Math.max(...lines.map((line) => line.length));
      w = Math.max(220, maxLineLen * 13.5 + 50);
      h = lines.length * 30 + 35;
    } else {
      const MAX_CHARS = 14;
      const CHAR_W = 12;
      const LINE_H = 24;
      const PAD = 30;
      const lines = wrapText(node.label, MAX_CHARS);
      node._wrappedText = lines;
      const maxLineLen = Math.max(...lines.map((line) => line.length));
      w = Math.max(100, maxLineLen * CHAR_W + PAD);
      h = lines.length * LINE_H + PAD;
    }
    return { w, h };
  }

  function getVisibleChildren(node, state) {
    if (!state.expandedNodes.has(node.id)) return [];
    let children = node.children || [];
    if (!state.goDeeper) {
      children = children.filter((c) => c.tier !== 2);
    }
    return children;
  }

  function calcSubtreeHeight(node, state, depth) {
    const size = getSize(node, depth);
    const children = getVisibleChildren(node, state);
    if (children.length === 0) {
      node._layoutHeight = size.h;
      return size.h;
    }
    let totalHeight = 0;
    children.forEach((child, i) => {
      totalHeight += calcSubtreeHeight(child, state, depth + 1);
      if (i < children.length - 1) totalHeight += GAP;
    });
    node._layoutHeight = Math.max(size.h, totalHeight);
    return node._layoutHeight;
  }

  function calcSubtreeWidth(node, state, depth) {
    const size = getSize(node, depth);
    const children = getVisibleChildren(node, state);
    if (children.length === 0) {
      node._layoutWidth = size.w;
      return size.w;
    }
    let totalWidth = 0;
    children.forEach((child, i) => {
      totalWidth += calcSubtreeWidth(child, state, depth + 1);
      if (i < children.length - 1) totalWidth += GAP;
    });
    node._layoutWidth = Math.max(size.w, totalWidth);
    return node._layoutWidth;
  }

  function layoutRight(node, x, y, state, depth, branch, results) {
    const children = getVisibleChildren(node, state);
    if (children.length === 0) return;
    const nextX = x + H_STEP;
    const totalHeight = children.reduce(
      (sum, c, i) => sum + c._layoutHeight + (i < children.length - 1 ? GAP : 0),
      0
    );
    let currentY = y - totalHeight / 2;
    children.forEach((child) => {
      const childY = currentY + child._layoutHeight / 2;
      const size = getSize(child, depth + 1);
      results.nodes.push({
        id: child.id,
        x: nextX,
        y: childY,
        w: size.w,
        h: size.h,
        data: child,
        depth: depth + 1,
        branch
      });
      results.links.push({ source: { x, y }, target: { x: nextX, y: childY }, branch });
      layoutRight(child, nextX, childY, state, depth + 1, branch, results);
      currentY += child._layoutHeight + GAP;
    });
  }

  function layoutLeft(node, x, y, state, depth, branch, results) {
    const children = getVisibleChildren(node, state);
    if (children.length === 0) return;
    const nextX = x - H_STEP;
    const totalHeight = children.reduce(
      (sum, c, i) => sum + c._layoutHeight + (i < children.length - 1 ? GAP : 0),
      0
    );
    let currentY = y - totalHeight / 2;
    children.forEach((child) => {
      const childY = currentY + child._layoutHeight / 2;
      const size = getSize(child, depth + 1);
      results.nodes.push({
        id: child.id,
        x: nextX,
        y: childY,
        w: size.w,
        h: size.h,
        data: child,
        depth: depth + 1,
        branch
      });
      results.links.push({ source: { x, y }, target: { x: nextX, y: childY }, branch });
      layoutLeft(child, nextX, childY, state, depth + 1, branch, results);
      currentY += child._layoutHeight + GAP;
    });
  }

  function layoutDown(node, x, y, state, depth, branch, results) {
    const children = getVisibleChildren(node, state);
    if (children.length === 0) return;
    const nextY = y + V_STEP;
    const totalWidth = children.reduce(
      (sum, c, i) => sum + c._layoutWidth + (i < children.length - 1 ? GAP : 0),
      0
    );
    let currentX = x - totalWidth / 2;
    children.forEach((child) => {
      const childX = currentX + child._layoutWidth / 2;
      const size = getSize(child, depth + 1);
      results.nodes.push({
        id: child.id,
        x: childX,
        y: nextY,
        w: size.w,
        h: size.h,
        data: child,
        depth: depth + 1,
        branch
      });
      results.links.push({ source: { x, y }, target: { x: childX, y: nextY }, branch });
      layoutDown(child, childX, nextY, state, depth + 1, branch, results);
      currentX += child._layoutWidth + GAP;
    });
  }

  function compute(data, state) {
    const results = { nodes: [], links: [] };
    const rootSize = getSize(data, 0);
    results.nodes.push({
      id: data.id,
      x: 0,
      y: 0,
      w: rootSize.w,
      h: rootSize.h,
      data: data,
      depth: 0,
      branch: 'root'
    });

    const tech = data.children.find((c) => c.id === 'tech');
    const cap = data.children.find((c) => c.id === 'cap');
    const app = data.children.find((c) => c.id === 'app');

    if (tech) {
      calcSubtreeHeight(tech, state, 1);
      if (tech.children) tech.children.forEach((c) => calcSubtreeHeight(c, state, 2));
    }
    if (app) {
      calcSubtreeHeight(app, state, 1);
      if (app.children) app.children.forEach((c) => calcSubtreeHeight(c, state, 2));
    }
    if (cap) {
      calcSubtreeWidth(cap, state, 1);
      if (cap.children) cap.children.forEach((c) => calcSubtreeWidth(c, state, 2));
    }

    if (tech) {
      const techX = -700;
      const techSize = getSize(tech, 1);
      results.nodes.push({
        id: tech.id,
        x: techX,
        y: 0,
        w: techSize.w,
        h: techSize.h,
        data: tech,
        depth: 1,
        branch: 'tech'
      });
      results.links.push({ source: { x: 0, y: 0 }, target: { x: techX, y: 0 }, branch: 'tech' });
      layoutLeft(tech, techX, 0, state, 1, 'tech', results);
    }

    if (app) {
      const appX = 700;
      const appSize = getSize(app, 1);
      results.nodes.push({
        id: app.id,
        x: appX,
        y: 0,
        w: appSize.w,
        h: appSize.h,
        data: app,
        depth: 1,
        branch: 'app'
      });
      results.links.push({ source: { x: 0, y: 0 }, target: { x: appX, y: 0 }, branch: 'app' });
      layoutRight(app, appX, 0, state, 1, 'app', results);
    }

    if (cap) {
      const capY = 400;
      const capSize = getSize(cap, 1);
      results.nodes.push({
        id: cap.id,
        x: 0,
        y: capY,
        w: capSize.w,
        h: capSize.h,
        data: cap,
        depth: 1,
        branch: 'cap'
      });
      results.links.push({ source: { x: 0, y: 0 }, target: { x: 0, y: capY }, branch: 'cap' });
      layoutDown(cap, 0, capY, state, 1, 'cap', results);
    }

    return results;
  }

  return { compute: compute };
})();