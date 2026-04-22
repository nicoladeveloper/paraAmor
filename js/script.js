function openEnvelope() {
  const env = document.getElementById('envelope');
  env.classList.add('open');
  setTimeout(() => {
    document.getElementById('envelope-screen').classList.add('hidden');
    createPetals();
  }, 1200);
}

function createPetals() {
  const container = document.getElementById('particles');
  const emojis = ['🌸','✨','💕','🌹','💗','🌷'];
  for (let i = 0; i < 18; i++) {
    const p = document.createElement('div');
    p.className = 'petal';
    p.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    p.style.left = Math.random() * 100 + 'vw';
    p.style.fontSize = (10 + Math.random() * 16) + 'px';
    const dur = 6 + Math.random() * 10;
    const delay = Math.random() * 8;
    p.style.animation = `fall ${dur}s ${delay}s linear infinite`;
    container.appendChild(p);
  }
}

const ch = document.getElementById('cursorHeart');
let cursorTimer;
document.addEventListener('mousemove', e => {
  ch.style.left = e.clientX + 'px';
  ch.style.top = e.clientY + 'px';
  ch.style.opacity = '1';
  clearTimeout(cursorTimer);
  cursorTimer = setTimeout(() => ch.style.opacity = '0', 1500);
});

const reveals = document.querySelectorAll('.reveal, .razao-item');
const observer = new IntersectionObserver(entries => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), 100);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
reveals.forEach(el => observer.observe(el));
