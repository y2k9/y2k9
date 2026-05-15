// Show the enter button after 1s
window.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    document.getElementById('enter-btn').classList.add('visible');
  }, 1000);
});

function enter() {
  const intro = document.getElementById('intro');
  const main  = document.getElementById('main');

  // Fade intro out
  intro.classList.add('hiding');

  // Fade main in after intro finishes
  setTimeout(() => {
    intro.style.display = 'none';
    main.style.display  = 'block';
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        main.classList.add('visible');
      });
    });
  }, 400);
}
