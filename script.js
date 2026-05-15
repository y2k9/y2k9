window.addEventListener('DOMContentLoaded', () => {
  // Show "press enter" hint after 1s
  setTimeout(() => {
    document.getElementById('enter-hint').classList.add('visible');
  }, 1000);

  // Keyboard: Enter key
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') enter();
  });

  // Click on the hint (mobile / mouse)
  document.getElementById('enter-hint').addEventListener('click', enter);
});

function enter() {
  const intro = document.getElementById('intro');
  const main  = document.getElementById('main');

  intro.classList.add('hiding');

  setTimeout(() => {
    intro.style.display = 'none';
    main.style.display  = 'block';
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        main.classList.add('visible');
      });
    });
  }, 300);
}
