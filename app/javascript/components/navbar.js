const initUpdateNavbarOnScroll = () => {
  const navbar = document.querySelector('.navbar-lewagon');
  // const logo = document.querySelector('.responsive-logo');
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY >= window.innerHeight) {
        navbar.classList.add('navbar-lewagon-white');
        // logo.classList.add('small');
      } else {
        navbar.classList.remove('navbar-lewagon-white');
        // logo.classList.remove('small');
      }
    });
  }
}

export { initUpdateNavbarOnScroll };
