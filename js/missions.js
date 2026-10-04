window.MM = window.MM || {};

MM.missions = (function () {
  // Mission deck configuration (Layer 3)
  const ALL_MISSIONS = [
    { id: 'm1', text: 'Find 2 ways AI helps farmers', targetNodes: ['app-agri-crop', 'app-agri-yield'], progress: 0, goal: 2 },
    { id: 'm2', text: 'Find something AI can create', targetNodes: ['cap-create-genai', 'cap-create-text'], progress: 0, goal: 1 },
    { id: 'm3', text: 'Find an AI that protects people', targetNodes: ['app-sec-fraud', 'app-sec-threats'], progress: 0, goal: 1 }
  ];

  let activeMissions = [];

  function init() {
    activeMissions = [...ALL_MISSIONS];
    renderProgressCounters();
  }

  // Tracks node visits and checks mission criteria
  function checkNodeVisit(nodeId) {
    activeMissions.forEach(function (m) {
      if (m.targetNodes.includes(nodeId) && m.progress < m.goal) {
        m.progress++;
      }
    });

    renderProgressCounters();

    const allComplete = activeMissions.every(function (m) {
      return m.progress >= m.goal;
    });

    if (allComplete && !sessionStorage.getItem('missions_completed')) {
      sessionStorage.setItem('missions_completed', 'true');
      showCompletionCard();
    }
  }

  // Layer 1: Aspect progress counters (e.g. "Technology 6/34")
  function renderProgressCounters() {
    let bar = document.getElementById('aspect-progress-bar');
    if (!bar) {
      bar = document.createElement('div');
      bar.id = 'aspect-progress-bar';
      document.body.appendChild(bar);
    }

    const state = MM.main ? MM.main.getState() : null;
    const visitedCount = state && state.visitedNodes ? state.visitedNodes.size : 0;

    bar.innerHTML =
      '<div class="progress-badge tech"><i class="dot"></i> Technology: ' + visitedCount + '/34</div>' +
      '<div class="progress-badge caps"><i class="dot"></i> Capabilities</div>' +
      '<div class="progress-badge apps"><i class="dot"></i> Applications</div>';
  }

  // Closing card celebration overlay
  function showCompletionCard() {
    const card = document.createElement('div');
    card.className = 'mission-overlay';
    card.innerHTML =
      '<div class="quiz-card">' +
      '<h3>🎉 Explorer Badge Unlocked!</h3>' +
      '<p>Explorer: you found AI across 3 core corners of life! You have uncovered how everyday AI powers real-world capabilities.</p>' +
      '<button class="quiz-btn primary" id="btn-close-mission">Keep Exploring</button>' +
      '</div>';
    
    document.body.appendChild(card);

    card.querySelector('#btn-close-mission').addEventListener('click', function () {
      card.remove();
    });
  }

  return {
    init: init,
    checkNodeVisit: checkNodeVisit,
    renderProgressCounters: renderProgressCounters
  };
})();