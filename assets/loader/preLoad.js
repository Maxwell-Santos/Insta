
window.addEventListener('load', () => {
  
  setTimeout(() => {
    const preloader = document.querySelector('.preload')

    preloader.classList.add('finish');
    preloader.classList.remove('false');

  }, 1000);

});