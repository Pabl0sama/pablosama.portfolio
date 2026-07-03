// ============================================
// Année dans le footer
// ============================================
document.getElementById('year').textContent = new Date().getFullYear();

// ============================================
// Compteur d'uptime (temps depuis le chargement de la page)
// ============================================
const uptimeEl = document.getElementById('uptime');
const start = Date.now();

function pad(n) { return String(n).padStart(2, '0'); }

function updateUptime() {
  const elapsed = Math.floor((Date.now() - start) / 1000);
  const h = Math.floor(elapsed / 3600);
  const m = Math.floor((elapsed % 3600) / 60);
  const s = elapsed % 60;
  uptimeEl.textContent = `${pad(h)}:${pad(m)}:${pad(s)}`;
}
updateUptime();
setInterval(updateUptime, 1000);

// ============================================
// Menu mobile
// ============================================
const navToggle = document.getElementById('navToggle');
const nav = document.getElementById('nav');

navToggle.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('is-open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

nav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// ============================================
// Révélation au scroll
// ============================================
const revealEls = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

revealEls.forEach(el => observer.observe(el));

// ============================================
// Copier l'email
// ============================================
const copyBtn = document.getElementById('copyEmailBtn');
const emailLink = document.getElementById('emailLink');
const toast = document.getElementById('toast');

function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2200);
}

copyBtn.addEventListener('click', async () => {
  const email = emailLink.textContent.trim();
  try {
    await navigator.clipboard.writeText(email);
    showToast('Adresse copiée.');
  } catch (err) {
    showToast('Copie impossible sur ce navigateur.');
  }
});
