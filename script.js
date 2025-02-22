document.addEventListener('DOMContentLoaded', () => {
  const reasons = [
    "Desde aquel día en mi cumpleaños, mi vida se llenó de luz y amor",
    "Tu sonrisa ilumina hasta mis días más oscuros",
    "Cada beso tuyo es un regalo del cielo que atesoro en mi corazón",
    "Tu amor me inspira a ser mejor persona cada día",
    "Cuando estoy contigo, el mundo es un lugar más hermoso",
    "Tus ojos son el reflejo del amor más puro que existe",
    "Tu amor es el regalo más precioso que la vida me ha dado",
    "Eres mi inspiración, mi alegría y mi razón de ser",
    "Contigo aprendí el verdadero significado del amor",
    "Prometo dedicar mi vida a hacerte feliz y demostrarte mi amor"
  ];

  setTimeout(() => {
    document.getElementById('mainMessage').classList.add('visible');
  }, 1500);

  document.getElementById('continueBtn').addEventListener('click', () => {
    document.getElementById('mainMessage').classList.remove('visible');
    document.getElementById('reasonsContainer').classList.add('visible');
    
    const reasonsList = document.getElementById('reasonsList');
    reasons.forEach((reason, index) => {
      setTimeout(() => {
        const div = document.createElement('div');
        div.className = 'reason';
        div.textContent = reason;
        reasonsList.appendChild(div);
      }, index * 1000);
    });
  });

  document.getElementById('showFinalBtn').addEventListener('click', () => {
    document.getElementById('reasonsContainer').classList.remove('visible');
    document.getElementById('finalMessage').classList.add('visible');
  });

  document.getElementById('yesBtn').addEventListener('click', () => {
    document.getElementById('finalMessage').classList.remove('visible');
    document.getElementById('acceptedMessage').classList.add('visible');
    createFloatingHearts();
  });

  const noBtn = document.getElementById('noBtn');
  noBtn.addEventListener('mouseover', (e) => {
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    noBtn.style.position = 'absolute';
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
  });

  function createFloatingHearts() {
    const container = document.querySelector('.floating-hearts');
    const colors = ['❤️', '💖', '💗', '💓', '💝'];
    
    setInterval(() => {
      const heart = document.createElement('div');
      heart.className = 'floating-heart';
      heart.innerHTML = colors[Math.floor(Math.random() * colors.length)];
      heart.style.left = Math.random() * 100 + 'vw';
      heart.style.animationDuration = (Math.random() * 3 + 2) + 's';
      heart.style.fontSize = (Math.random() * 20 + 20) + 'px';
      container.appendChild(heart);
      setTimeout(() => heart.remove(), 4000);
    }, 200);
  }
});