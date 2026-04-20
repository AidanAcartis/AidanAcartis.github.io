// ===== PROJECTS MODULE =====

const allProjects = [

  // ── 1. Featured Projects ─────────────────────────────────────────────────
  {
    id: 1,
    title: 'taskMonitor',
    theme: 'Semantic Activity Analysis with AI',
    category: 'featured',
    filters: ['ml', 'software'],
    demo: 'assets/gifs/video.webm',
    short: 'Desktop app that tracks open windows and bash commands, then uses AI to cluster tasks by intent and summarize user activity.',
    details: 'Built with Python and PyQt6, taskMonitor hooks into wmctrl and X11 to capture window open/close events in real time, and reads .bash_history for command tracking. A processing pipeline normalizes raw logs, uses a custom model (FileDescGen) to generate human-readable descriptions of window events, and cmddesc to describe shell commands. A second model (Semantic-Task-Clustering) groups tasks sharing the same intent, and a third model (Global_Task_Description) synthesizes an overall intention across all clusters. All events are timestamped and visualized through graphs and statistics in the PyQt6 interface.',
    techs: ['Python', 'Bash', 'PyTorch', 'Transformers (T5/Flan-T5)', 'Fine-tuned NLP Models', 'SentenceTransformers', 'scikit-learn', 'Pandas', 'NumPy', 'PyQt6', 'pyqtgraph', 'SQLite', 'Docker', 'Linux (X11, wmctrl)'],
    hours: 6930,
    link: 'https://github.com/AidanAcartis/taskMonitor'
  },
  {
    id: 4,
    title: 'Command Describer (cmddesc)',
    theme: 'CLI Tool · Systems',
    category: 'featured',
    filters: ['software'],
    demo: 'assets/gifs/cmddesc.webm',
    short: 'Packaged Python CLI that parses and describes any shell command — flags, arguments, pipes, subcommands — in plain language.',
    details: 'A modular Python package installable via pip (editable dev mode or wheel distribution) that tokenizes shell input using safe_shlex_split, detects argument types (files, IPs, ports, URLs, scripts, JSON…), matches tokens against a JSON-based command database, and produces human-readable descriptions of each component. Handles complex inputs: combined flags (-xvz → -x -v -z), piped commands, sudo, scripts, and multi-operator strings (&&, ||, ;). The architecture is clean and separated: constants, tokenizer, type detector, pattern expander, matcher, and describer. Used internally in taskMonitor to annotate bash history entries.',
    techs: ['Python', 'pip', 'PyInstaller', 'Bash', 'JSON'],
    hours: 80,
    link: 'https://github.com/AidanAcartis/Command-Describer'
  },

  // ── 2. AI & Data Projects ────────────────────────────────────────────────
  {
    id: 14,
    title: 'Semantic Task Clustering',
    theme: 'NLP · Contrastive Learning',
    category: 'ai',
    filters: ['ml', 'software'],
    demo: 'assets/images/clustering_model.png',
    short: 'End-to-end semantic clustering pipeline that groups user activities into coherent, interpretable global tasks using sentence embeddings and hierarchical refinement.',
    details: 'Semantic Task Clustering is a full training and inference pipeline designed to transform raw user task items into semantically coherent clusters representing high-level global tasks. The system uses SentenceTransformer embeddings (MiniLM-L6-v2) and hierarchical agglomerative clustering, refined through iterative reclustering based on cohesion and silhouette score. The pipeline enforces a task hierarchy (sub-tasks → global task blocks), trains using implicit contrastive learning (MultipleNegativesRankingLoss), and supports singleton tasks as valid independent clusters. The inference stage includes multi-step refinement: global clustering, cohesion-based reclustering, singleton handling, and adaptive cluster splitting. The final output is a stable, interpretable set of task clusters directly usable in a user activity analysis system.',
    techs: ['Python', 'SentenceTransformers', 'scikit-learn', 'Cosine Similarity', 'NLP', 'Embeddings'],
    hours: 330,
    link: 'https://github.com/AidanAcartis/Semantic-Task-Clustering'
  },
  {
    id: 15,
    title: 'File Description Generation Model (FileDescGen)',
    theme: 'NLP · Text Generation · AI',
    category: 'ai',
    filters: ['ml', 'software'],
    demo: 'assets/images/filedescgen_architecture.png',
    short: 'Fine-tuned model that generates human-readable descriptions from raw filenames and system logs.',
    details: 'A sequence-to-text model trained to convert raw filenames, file metadata, and system events into natural language descriptions. Used for interpreting low-level system logs into meaningful semantic representations.',
    techs: ['Python', 'PyTorch', 'Transformers (T5)', 'Fine-tuning', 'PEFT (optional)', 'NLP'],
    hours: 1792,
    link: 'https://github.com/AidanAcartis/FileDescGen'
  },
  {
    id: 16,
    title: 'Global Task Description Inference Model',
    theme: 'NLP · Intent Detection · AI . Abstraction Learning',
    category: 'ai',
    filters: ['ml', 'software'],
    demo: 'assets/images/intention_prediction_architecture.png',
    short: 'Model that infers high-level user intent from sequences of task items.',
    details: 'A fine-tuned Flan-T5 model that takes structured task sequences as input and predicts the global objective behind them. Used for user intent inference and behavioral abstraction.',
    techs: ['Python', 'PyTorch', 'Transformers (Flan-T5)', 'LoRA (PEFT)', 'NLP', 'Sequence-to-Sequence'],
    hours: 532,
    link: 'https://github.com/AidanAcartis/Global_Task_Description'
  },
  {
    id: 2,
    title: 'Text Feature Extraction & Classification',
    theme: 'NLP · Machine Learning',
    category: 'ai',
    filters: ['ml', 'software'],
    demo: 'assets/images/newsgroups_pipeline_architecture.png',
    short: 'Rigorous NLP benchmark comparing BoW, TF-IDF and N-grams across four classifiers with full hyperparameter tuning.',
    details: 'Explored three feature extraction strategies — Bag-of-Words (unigrams), TF-IDF, and N-grams (N≥2) — each paired with Softmax, Linear SVM, Random Forest, and Gradient Boosting classifiers. The pipeline covers EDA (class imbalance, outlier detection, t-SNE visualization), full text preprocessing (lowercasing, tokenization, stopword removal, lemmatization), and hyperparameter tuning via Grid Search. TF-IDF + Linear SVM achieved the best test score (0.741). Key insight: feature engineering matters more than model choice for classical NLP.',
    techs: ['Python', 'Scikit-learn', 'NLTK', 'Pandas', 'Matplotlib'],
    hours: 48,
    link: 'https://github.com/AidanAcartis/Texte-Feature-Extraction'
  },
  {
    id: 3,
    title: 'CIFAR-10 Feature Extraction',
    theme: 'Computer Vision · ML',
    category: 'ai',
    filters: ['ml', 'software'],
    demo: 'assets/images/cifar10_evolution_architecture.png',
    short: 'Progressive image classification pipeline: raw pixels → HOG features → VGG16 transfer learning, with classical ML models.',
    details: 'Benchmarked image classification on CIFAR-10 using three increasingly powerful feature representations. Starting from raw pixel values with Logistic Regression and SVM, then applying HOG (Histogram of Oriented Gradients) with PCA dimensionality reduction, and finally extracting deep features from a pre-trained VGG16 model. Each stage was evaluated with multiple classifiers and hyperparameter tuning (Grid Search, Randomized Search). Kernel SVM on VGG16 features achieved the best performance.',
    techs: ['Python', 'TensorFlow', 'Scikit-learn', 'OpenCV', 'PCA', 'VGG16'],
    hours: 48,
    link: 'https://github.com/AidanAcartis/Image-classification-feature-extraction'
  },

  // ── 3. Systems & Algorithms ───────────────────────────────────────────────
  {
    id: 7,
    title: 'All-Valid Sudoku Generator',
    theme: 'Combinatorial Enumeration · C',
    category: 'algorithm',
    filters: ['math', 'c', 'software'],
    demo: 'assets/gifs/sudoku.webm',
    short: 'Second personal C project. Exhaustively enumerates all valid n×n Sudoku grids using a combinatorial counter matrix and constraint pruning.',
    details: 'Enumerates all valid Sudoku grids of size n×n (n = k²: 4, 9, 16…) using a multi-base positional counter matrix boucle[][] that systematically indexes every permutation of cell placements. Three constraint checks gate each assignment: ConditionLigne(), ConditionBloc(), and TestPresence(). When a constraint fails the counter is incremented; overflow triggers an iterative local backtrack. Once a complete Uplet is found, construireSudoku() fills the final grid. Each candidate is verified by estSudokuValide().',
    techs: ['C', 'Combinatorial enumeration', 'Constraint satisfaction', 'Iterative backtracking'],
    hours: 4800,
    link: 'https://github.com/AidanAcartis/AlgoGenSudoku'
  },
  {
    id: 6,
    title: 'Latin Square Generator',
    theme: 'Combinatorics · C',
    category: 'algorithm',
    filters: ['math', 'c', 'software'],
    demo: 'assets/gifs/Carre_Latin.webm',
    short: 'First personal C project with AlgoGenSudoku. Generates all Latin squares of order n via two-level permutation enumeration.',
    details: 'Operates in two nested levels. Level 1 (BouclePermut): iterates through n!/2 distinct permutations of the base row using a factorial-radix counter that drives FonctionPermut() — a circular sub-window shift. For each valid permutation, a cyclic Latin square is built. Level 2 (BouclePermutCarre): permutes its non-first rows generating all row-rearrangement variants. Modular structure: main.c, boucles.c, permutation.c, utils.c.',
    techs: ['C', 'Combinatorics', 'Permutation enumeration', 'Factorial-radix counter', 'Modular arithmetic'],
    hours: 4320,
    link: 'https://github.com/AidanAcartis/AlgoGenCarreLatin'
  },
  {
    id: 5,
    title: 'Gauss-Jordan Solver',
    theme: 'Numerical Methods · Java',
    category: 'algorithm',
    filters: ['math', 'java', 'software'],
    demo: 'assets/gifs/Linear-System-solver.webm',
    short: 'Exact linear system solver using Gauss-Jordan elimination with fraction arithmetic — no floating-point, no rounding errors.',
    details: 'Solves any linear system P·X = B by transforming the augmented matrix (P|B) into Reduced Row Echelon Form using exact symbolic fraction arithmetic throughout. The Fraction class handles all operations auto-simplified via recursive GCD. MatrixUtils.reduceToEchelonForm() produces full RREF in a single forward pass. Solver.solve() checks for incompatibility, reorders zero rows, and reads the solution directly from B.',
    techs: ['Java', 'Exact fraction arithmetic', 'Linear algebra', 'RREF', 'Gauss-Jordan elimination'],
    hours: 64,
    link: 'https://github.com/AidanAcartis/Gauss-Jordan_Solver'
  },
  {
    id: 13,
    title: 'Hexagonal Pathfinding Heuristic (C++)',
    theme: 'Algorithms · Simulation · Game Logic',
    category: 'algorithm',
    filters: ['cpp', 'software', 'math'],
    demo: 'assets/gifs/PathFinding.webm',
    short: 'Turn-based hex-grid simulation with heuristic pathfinding, obstacle-aware movement, and multi-agent travel time comparison.',
    details: 'Simulates a turn-based navigation system on a hexagonal grid where two independent agents move toward a shared objective. Each agent computes its path using a multi-layer heuristic pipeline: greedy directional attraction, vector-based movement evaluation, obstacle collision detection, and fallback logic when blocked. The algorithm compares total travel time between both agents to determine which arrives first.',
    techs: ['C++', 'Heuristic Algorithms', 'Pathfinding', 'Simulation'],
    hours: 60,
    link: 'https://github.com/AidanAcartis/FarmingResources'
  },

  // ── 4. Applications ───────────────────────────────────────────────────────
  {
    id: 8,
    title: 'Social Media Platform (Next.js)',
    theme: 'Frontend · Backend · Social Network',
    category: 'apps',
    filters: ['software', 'web'],
    demo: 'assets/gifs/Social_media_app.webm',
    short: 'Full-stack social media platform featuring authentication, user profiles, posts, messaging, and real-time interactions.',
    details: 'Full-stack social media application built with Next.js (frontend) and Node.js/Express (backend). Implements secure user authentication, dynamic profile management, post creation, threaded comments, reactions, and a discussion forum. Supports private messaging and a friend request system. Backend exposes REST APIs for all CRUD operations.',
    techs: ['Next.js', 'Node.js', 'Express', 'REST API', 'JavaScript'],
    hours: 600,
    link: 'https://github.com/AidanAcartis/Social_Media'
  },
  {
    id: 12,
    title: 'Product Manager (React Native)',
    theme: 'Mobile App',
    category: 'apps',
    filters: ['mobile', 'software'],
    demo: 'assets/gifs/store-app.webm',
    short: 'Cross-platform mobile app for product CRUD with auth, image upload, advanced filters, and user profile management.',
    details: 'Built with React Native and Expo, backed by json-server simulating a REST API. Features: Sign Up / Sign In with AsyncStorage session persistence, paginated product list, full CRUD with multi-select, image upload via expo-image-picker, and advanced filtering by category, seller name, price, and text search.',
    techs: ['React Native', 'Expo', 'Axios', 'AsyncStorage', 'json-server', 'expo-router'],
    hours: 70,
    link: 'https://github.com/AidanAcartis/product-manager'
  },
  {
    id: 17,
    title: 'MTScan — Multi-Tool Security Scanner',
    theme: 'Cybersecurity · Network & Web Scanning',
    category: 'security',
    filters: ['security', 'software'],
    demo: 'assets/gifs/mtscan.webm',
    short: 'Full-stack security scanning platform that orchestrates Nmap and Gobuster with real-time results, API access, and interactive analysis dashboard.',
    details: 'MTScan integrates Nmap for network scanning and Gobuster for web enumeration into a unified system. The backend exposes a REST API (Flask) with Swagger/OpenAPI documentation, while the frontend provides a terminal-like interface with live logs via WebSockets. Outputs are enriched with risk-based recommendations, visualized through interactive charts, and stored for historical analysis and JSON export.',
    techs: ['Python', 'Flask', 'REST API', 'WebSockets', 'Nmap', 'Gobuster', 'JavaScript', 'HTML/CSS', 'Chart.js', 'Swagger/OpenAPI'],
    hours: 120,
    link: 'https://github.com/sahyan19/MTScan'
  }
];

// ── Category config ────────────────────────────────────────────────────────
const CATEGORIES = [
  { id: 'featured',  label: 'Featured',             icon: '★'  },
  { id: 'ai',        label: 'AI & Data',             icon: '◈'  },
  { id: 'algorithm', label: 'Systems & Algorithms',  icon: '◎'  },
  { id: 'apps',      label: 'Applications',          icon: '◻'  },
  { id: 'security',  label: 'Security',              icon: '🛡️' }
];

let activeFilters = new Set();

// WeakMap to track zoom level per <img> element
const zoomLevels = new WeakMap();

// ── Init ───────────────────────────────────────────────────────────────────
function initProjects() {
  try {
    setupFilters();
    renderProjects();
  } catch (err) {
    console.error('Projects init error:', err);
    document.getElementById('projectsGrid').innerHTML =
      '<div class="empty-state">// Error initializing projects.</div>';
  }
}

// ── Filters ────────────────────────────────────────────────────────────────
function setupFilters() {
  const existingBtns = document.querySelectorAll('#filterBar .filter-btn');
  existingBtns.forEach(btn => {
    if (btn.classList.contains('active')) activeFilters.add(btn.dataset.filter);
    btn.addEventListener('click', () => {
      activeFilters.clear();
      document.querySelectorAll('#filterBar .filter-btn').forEach(b => b.classList.remove('active'));
      activeFilters.add(btn.dataset.filter);
      btn.classList.add('active');
      renderProjects();
    });
  });
}

// ── Render ─────────────────────────────────────────────────────────────────
function renderProjects() {
  const grid = document.getElementById('projectsGrid');

  const filtered = activeFilters.size === 0
    ? allProjects
    : allProjects.filter(p => activeFilters.has(p.category));

  if (filtered.length === 0) {
    grid.innerHTML = '<div class="empty-state">// No projects match this filter.</div>';
    return;
  }

  let html = '';
  CATEGORIES.forEach(cat => {
    const catProjects = filtered.filter(p => p.category === cat.id);
    if (catProjects.length === 0) return;
    html += `
      <div class="category-section">
        <div class="category-header">
          <span class="category-icon">${cat.icon}</span>
          <span class="category-label">${cat.label}</span>
        </div>
        <div class="category-grid">
          ${catProjects.map(p => buildCard(p)).join('')}
        </div>
      </div>
    `;
  });

  grid.innerHTML = html;

  grid.querySelectorAll('.project-card').forEach((card, i) => {
    card.style.animationDelay = `${i * 60}ms`;
    card.classList.add('card-enter');
  });
}

// ── Card builder ───────────────────────────────────────────────────────────
function buildCard(p) {
  const techsHtml = p.techs.map(t => `<span class="tech-tag">${t}</span>`).join('');
  const isVideo   = p.demo?.endsWith('.webm');

  const demoHtml = isVideo
    ? `<video class="video-main" autoplay loop muted playsinline>
         <source src="${p.demo}" type="video/webm">
       </video>`
    : `<div class="img-controls">
         <button class="btn-zoom-toggle" onclick="toggleExpand(this)">SHOW [+]</button>
         <button class="btn-zoom-in"  onclick="zoomIn(this)"  style="display:none" title="Zoom +">+</button>
         <button class="btn-zoom-out" onclick="zoomOut(this)" style="display:none" title="Zoom −">−</button>
       </div>
       <img class="demo-gif" src="${p.demo}" alt="${p.title} demo">`;

  return `
    <div class="project-card">
      <div class="project-demo">${demoHtml}</div>
      <div class="project-info">
        <div class="project-title">${p.title}</div>
        <div class="project-theme">${p.theme}</div>
        <div class="project-desc">${p.short}</div>
        <div class="project-meta">
          <!-- <div class="meta-item"><span>⏱</span> ${p.hours}h dev</div> -->
          <div class="tech-tags">${techsHtml}</div>
        </div>
        <div class="project-actions">
          <a href="${p.link}" target="_blank" class="btn-sm btn-outline"
             onclick="event.stopPropagation()">GitHub ↗</a>
          <button class="btn-sm btn-primary"
             onclick="event.stopPropagation(); openModal(${p.id})">Details</button>
        </div>
      </div>
    </div>`;
}

// ── Zoom helpers ───────────────────────────────────────────────────────────
function getZoom(img) {
  return zoomLevels.get(img) ?? 1;
}

function applyZoom(img, level) {
  const clamped = Math.max(1, Math.min(level, 5));
  zoomLevels.set(img, clamped);

  // Update transform-origin BEFORE applying scale to avoid position jump
  if (clamped > 1) {
    img.style.transform = `scale(${clamped})`;
    img.style.cursor    = 'crosshair';
  } else {
    img.style.transform       = '';
    img.style.transformOrigin = 'center center';
    img.style.cursor          = 'default';
  }

  // Enable / disable buttons
  const container = img.closest('.project-demo');
  const btnIn  = container.querySelector('.btn-zoom-in');
  const btnOut = container.querySelector('.btn-zoom-out');
  if (btnIn)  btnIn.disabled  = clamped >= 5;
  if (btnOut) btnOut.disabled = clamped <= 1;
}

function zoomIn(btn) {
  const img = btn.closest('.project-demo').querySelector('.demo-gif');
  if (img) applyZoom(img, getZoom(img) + 0.5);
}

function zoomOut(btn) {
  const img = btn.closest('.project-demo').querySelector('.demo-gif');
  if (img) applyZoom(img, getZoom(img) - 0.5);
}

// ── Expand / collapse image panel ─────────────────────────────────────────
function toggleExpand(btn) {
  const container = btn.closest('.project-demo');
  const isExpanded = container.classList.toggle('expanded');
  const img = container.querySelector('.demo-gif');

  btn.textContent = isExpanded ? 'CLOSE [-]' : 'SHOW [+]';

  const btnIn  = container.querySelector('.btn-zoom-in');
  const btnOut = container.querySelector('.btn-zoom-out');
  if (btnIn)  btnIn.style.display  = isExpanded ? 'inline-block' : 'none';
  if (btnOut) btnOut.style.display = isExpanded ? 'inline-block' : 'none';

  // Reset zoom on close
  if (!isExpanded && img) applyZoom(img, 1);
}

// ── Mouse pan when zoomed ──────────────────────────────────────────────────
document.addEventListener('mousemove', e => {
  const img = e.target.closest?.('.demo-gif');
  if (!img || getZoom(img) <= 1) return;

  const { left, top, width, height } = img.getBoundingClientRect();
  const x = ((e.clientX - left) / width)  * 100;
  const y = ((e.clientY - top)  / height) * 100;
  img.style.transformOrigin = `${x}% ${y}%`;
});

// ── Modal ──────────────────────────────────────────────────────────────────
function openModal(id) {
  const p = allProjects.find(x => x.id === id);
  if (!p) return;

  document.getElementById('modalTitle').textContent  = p.title;
  document.getElementById('modalTheme').textContent  = p.theme;
  document.getElementById('modalDesc').textContent   = p.details;
  document.getElementById('modalTechs').innerHTML    = p.techs.map(t => `<span class="tech-tag">${t}</span>`).join('');
  document.getElementById('modalHours').textContent  = `${p.hours} hours of development`;
  document.getElementById('modalLink').href          = p.link;

  document.getElementById('modalOverlay').classList.add('open');
}

// ── Bootstrap ──────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  const closeBtn = document.getElementById('modalClose');
  const overlay  = document.getElementById('modalOverlay');

  if (closeBtn) closeBtn.onclick = () => overlay.classList.remove('open');
  if (overlay)  overlay.onclick  = e => { if (e.target === overlay) overlay.classList.remove('open'); };

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') overlay?.classList.remove('open');
  });

  initProjects();
  initFairy();
});

// ── Fairy ──────────────────────────────────────────────────────────────────
function initFairy() {
  const fairy = document.getElementById('fairy');
  if (!fairy) return;

  let fx = window.innerWidth  / 2;
  let fy = window.innerHeight / 2;
  let tx = fx, ty = fy;

  document.addEventListener('mousemove', e => { tx = e.clientX; ty = e.clientY; });

  function spawnTrail(x, y) {
    const t = document.createElement('div');
    t.className = 'fairy-trail';
    const s = Math.random() * 5 + 3;
    t.style.cssText = `width:${s}px;height:${s}px;left:${x - s/2}px;top:${y - s/2}px;`;
    document.body.appendChild(t);
    setTimeout(() => t.remove(), 800);
  }

  let lastTrail = 0;
  function animFairy() {
    fx += (tx - fx) * 0.08;
    fy += (ty - fy) * 0.08;
    fairy.style.left = (fx - 14) + 'px';
    fairy.style.top  = (fy - 14) + 'px';
    const now = Date.now();
    if (now - lastTrail > 80) { spawnTrail(fx, fy); lastTrail = now; }
    requestAnimationFrame(animFairy);
  }
  animFairy();
}