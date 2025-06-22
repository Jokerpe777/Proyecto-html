
  const toggleBtn = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav-links');

  toggleBtn.addEventListener('click', () => {
    nav.classList.toggle('active');
  });
