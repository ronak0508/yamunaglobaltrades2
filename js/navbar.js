// Active Page Detection for Desktop Nav
function setActiveNavLink() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const desktopNavLinks = document.querySelectorAll('.desktop-nav a');
  
  desktopNavLinks.forEach(link => {
    link.classList.remove('active');
    const linkHref = link.getAttribute('href');
    if (linkHref === currentPage || (currentPage === '' && linkHref === 'index.html')) {
      link.classList.add('active');
    }
  });
  
  // Also update side drawer active state
  const sideDrawerLinks = document.querySelectorAll('.side-drawer-nav .nav-item');
  sideDrawerLinks.forEach(link => {
    link.classList.remove('active');
    const linkHref = link.getAttribute('href');
    if (linkHref === currentPage || (currentPage === '' && linkHref === 'index.html')) {
      link.classList.add('active');
    }
  });
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', setActiveNavLink);

