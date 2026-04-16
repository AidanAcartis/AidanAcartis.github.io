// ===== SKILLS MODULE =====

const SKILLS = [
  {
    category: "Mathematics / DS",
    skills: ["Probability", "Statistics", "Optimization", "Linear Algebra", "Calculus", "Data Analysis", "Data Visualization"]
  },
  {
    category: "Languages",
    skills: ["Python", "C", "C++", "Java", "JavaScript", "TypeScript", "SQL", "Bash"]
  },
  {
    category: "ML / AI",
    skills: ["TensorFlow", "PyTorch", "Scikit-learn", "Keras", "OpenCV", "HuggingFace", "NLTK", "Pandas", "NumPy"]
  },
  {
    category: "Web / Mobile",
    skills: ["React", "Node.js", "Flask", "Django", "React Native", "REST API", "GraphQL", "Nest.js"]
  },
  {
    category: "Tools",
    skills: ["Git", "Docker", "Linux", "AWS", "GCP", "PostgreSQL", "MongoDB", "CI/CD", "PyQT6", "Cisco Packet Tracer", "Metasploit", "Gobuster", "Nmap", "WireShark", "BurpSuite"]
  }
];

const CERTIFICATIONS = [
  {
    name: "Machine Learning with Python",
    issuer: "freeCodeCamp",
    year: "2026",
    image: "assets/certs/ML_Python.png",
    link: ""
  },
  {
    name: "Intermediate Machine Learning with Kaggle",
    issuer: "Kaggle",
    year: "2025",
    image: "assets/certs/ Intermediate-Machine-Learning.png",
    link: ""
  },
  {
    name: "Intro to Deep Learning",
    issuer: "Kaggle",
    year: "2025",
    image: "assets/certs/DL.png",
    link: ""
  },
  {
    name: "Problem Solving Intermediaire with C++",
    issuer: "Hackerrank",
    year: "2025",
    image: "assets/certs/solving_intermediaire.png",
    link: ""
  },
  {
    name: "Python basic",
    issuer: "Hackerrank",
    year: "2025",
    image: "assets/certs/python.png",
    link: ""
  },
  {
    name: "Software Engineer",
    issuer: "Hackerrank",
    year: "2025",
    image: "assets/certs/SE.png",
    link: ""
  },
  {
    name: "Certified in Cybersecurity",
    issuer: "ISC2",
    year: "2026",
    image: "assets/certs/cybersecurity.png",
    link: ""
  },
  {
    name: "Network Security",
    issuer: "ISC2",
    year: "2026",
    image: "assets/certs/Network_Security.png",
    link: ""
  },
  {
    name: "AWS Blockchain Manager",
    issuer: "Amazon Web Services",
    year: "2025",
    image: "assets/certs/Blockchain.png",
    link: ""
  }
];

// ── RENDER HELPERS ─────────────────────────────────────────────────────

function buildSkillCategory(cat) {
  const items = cat.skills.map(skill => `
    <span class="skill-pill">${skill}</span>
  `).join('');

  return `
    <div class="skill-category">
      <div class="skill-cat-title">${cat.category}</div>
      <div class="skill-list">
        ${items}
      </div>
    </div>
  `;
}

// UNE SEULE VERSION de buildCertification ici :
function buildCertification(cert) {
  return `
    <a href="${cert.link}" class="cert-card" target="_blank">
      <div class="cert-icon">
        <img src="${cert.image}" alt="${cert.name}" 
             onerror="this.src='https://via.placeholder.com/44?text=🏆'"
             style="width: 100%; height: 100%; object-fit: contain; padding: 4px; display: block;">
      </div>
      <div class="cert-info">
        <div class="cert-name">${cert.name}</div>
        <div class="cert-issuer">${cert.issuer}</div>
        <div class="cert-year">${cert.year}</div>
      </div>
    </a>
  `;
}

// ── RENDER PIPELINE ───────────────────────────────────────────────────

function renderSkills() {
  const grid = document.getElementById('skillsGrid');
  if (grid) grid.innerHTML = SKILLS.map(buildSkillCategory).join('');
}

function renderCerts() {
  const grid = document.getElementById('certsGrid');
  if (grid) grid.innerHTML = CERTIFICATIONS.map(buildCertification).join('');
}

function initSkills() {
  renderSkills();
  renderCerts();
}

// Initialisation propre
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initSkills);
} else {
  initSkills();
}