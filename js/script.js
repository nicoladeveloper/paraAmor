/* ── AUDIO ── */
const audio = document.getElementById('bg-audio');
let musicPlaying = false;

function startMusic() {
  audio.volume = 0.6;
  audio.play().then(() => {
    musicPlaying = true;
    updateMusicUI();
    document.getElementById('music-player').classList.add('visible');
  }).catch(() => {
    document.getElementById('music-player').classList.add('visible');
    updateMusicUI();
  });
}

function toggleMusic() {
  if (musicPlaying) {
    audio.pause();
    musicPlaying = false;
  } else {
    audio.play();
    musicPlaying = true;
  }
  updateMusicUI();
}

function updateMusicUI() {
  const btn = document.getElementById('music-toggle');
  const bars = document.getElementById('musicBars');
  btn.textContent = musicPlaying ? '❚❚' : '▶';
  if (musicPlaying) {
    bars.classList.remove('paused');
  } else {
    bars.classList.add('paused');
  }
}

/* ── ENVELOPE ── */
function openEnvelope() {
  const env = document.getElementById('envelope');
  env.classList.add('open');
  setTimeout(() => {
    document.getElementById('envelope-screen').classList.add('hidden');
    createPetals();
    startMusic();
  }, 1200);
}

/* ── PETALS ── */
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

/* ── CURSOR HEART ── */
const ch = document.getElementById('cursorHeart');
let cursorTimer;
document.addEventListener('mousemove', e => {
  ch.style.left = e.clientX + 'px';
  ch.style.top = e.clientY + 'px';
  ch.style.opacity = '1';
  clearTimeout(cursorTimer);
  cursorTimer = setTimeout(() => ch.style.opacity = '0', 1500);
});

/* ── SCROLL REVEAL ── */
const reveals = document.querySelectorAll('.reveal, .razao-item');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), 100);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
reveals.forEach(el => observer.observe(el));
