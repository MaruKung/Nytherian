document.getElementById('startBtn').addEventListener('click', () => {
  const headerHeight = 110; // ความสูง header ที่จะ offset
  const target = document.getElementById('main-content');
  const targetPosition = target.getBoundingClientRect().top + window.scrollY - headerHeight;

  window.scrollTo({
    top: targetPosition,
    behavior: 'smooth'
  });
});
