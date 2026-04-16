// ===== AWARDS MODULE =====

const AWARDS = [
  {
    title: "Hack4Her",
    organization: "#HelloWomen Orange",
    year: "2024",
    rank: "1st Place",
    description: "Developed an end-to-end platform for reporting and tracking women's rights violations. The system ensures case follow-up and legal resolution, featuring a specialized AI model to assist deaf and mute individuals in reporting assaults securely.",
    image: "assets/awards/HACKATHON.jpg",
    rankColor: "var(--green)"
  }
];

// ── RENDER HELPER ────────────────────────────────────────────────────────

function buildAwardCard(award) {
  return `
    <div class="award-card">
      <div class="award-img">
        <img src="${award.image}" alt="${award.title}" 
             onerror="this.src='https://via.placeholder.com/400x250?text=Award+Winner'">
        <span class="award-rank" style="background: ${award.rankColor}">${award.rank}</span>
      </div>
      <div class="award-body">
        <div class="award-org">${award.organization} · ${award.year}</div>
        <div class="award-title">${award.title}</div>
        <div class="award-desc">${award.description}</div>
      </div>
    </div>
  `;
}

// ── RENDER PIPELINE ──────────────────────────────────────────────────────

function renderAwards() {
  const grid = document.getElementById('awardsGrid');
  if (grid) {
    grid.innerHTML = AWARDS.map(buildAwardCard).join('');
  }
}

document.addEventListener('DOMContentLoaded', renderAwards);