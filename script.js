document.getElementById('startBtn').addEventListener('click', () => {
  const headerHeight = 110;
  const target = document.getElementById('main-content');
  const targetPosition = target.getBoundingClientRect().top + window.scrollY - headerHeight;

  window.scrollTo({
    top: targetPosition,
    behavior: 'smooth'
  });
});
