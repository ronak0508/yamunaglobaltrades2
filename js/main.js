// Side Drawer Toggle
function initSideDrawer() {
  const menuToggle = document.getElementById('menuToggle');
  const threeDotsMenu = document.getElementById('threeDotsMenu');
  const sideDrawer = document.getElementById('sideDrawer');
  const sideDrawerOverlay = document.getElementById('sideDrawerOverlay');
  const closeDrawer = document.getElementById('closeDrawer');
  
  function openDrawer() {
    if (sideDrawer) sideDrawer.classList.add('active');
    if (sideDrawerOverlay) sideDrawerOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
  
  function closeDrawerFunc() {
    if (sideDrawer) sideDrawer.classList.remove('active');
    if (sideDrawerOverlay) sideDrawerOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }
  
  if (menuToggle) {
    menuToggle.addEventListener('click', openDrawer);
  }
  
  if (threeDotsMenu) {
    threeDotsMenu.addEventListener('click', openDrawer);
  }
  
  if (closeDrawer) {
    closeDrawer.addEventListener('click', closeDrawerFunc);
  }
  
  if (sideDrawerOverlay) {
    sideDrawerOverlay.addEventListener('click', closeDrawerFunc);
  }
}

// Mobile Menu Toggle (for responsive mobile menu if needed)
function initMobileMenu() {
  const menuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  
  if (menuButton && mobileMenu) {
    menuButton.addEventListener('click', () => {
      const isOpen = mobileMenu.classList.contains('hidden');
      mobileMenu.classList.toggle('hidden');
      menuButton.setAttribute('aria-expanded', isOpen);
      
      // Update icon
      const icon = menuButton.querySelector('svg');
      if (icon) {
        icon.innerHTML = isOpen 
          ? '<path d="M6 18L18 6M6 6l12 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>'
          : '<path d="M3 12h18M3 6h18M3 18h18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>';
      }
    });
  }
}

// Animated Counter
function initAnimatedCounters() {
  const counters = document.querySelectorAll('[data-counter]');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
        animateCounter(entry.target);
        entry.target.classList.add('counted');
      }
    });
  }, { threshold: 0.3 });
  
  counters.forEach(counter => observer.observe(counter));
}

function animateCounter(element) {
  const end = parseInt(element.getAttribute('data-end'));
  const suffix = element.getAttribute('data-suffix') || '';
  const duration = parseInt(element.getAttribute('data-duration')) || 2000;
  const start = 0;
  
  let startTime = null;
  
  function animate(currentTime) {
    if (!startTime) startTime = currentTime;
    const progress = Math.min((currentTime - startTime) / duration, 1);
    const currentCount = Math.floor(progress * (end - start) + start);
    element.querySelector('.counter-value').textContent = currentCount.toLocaleString() + suffix;
    
    if (progress < 1) {
      requestAnimationFrame(animate);
    }
  }
  
  requestAnimationFrame(animate);
}

// Product Modal
function openProductModal(product) {
  const modal = document.getElementById('product-modal');
  if (!modal) return;
  
  modal.querySelector('#modal-title').textContent = product.title;
  modal.querySelector('#modal-image').src = `assets/products/${product.image}`;
  modal.querySelector('#modal-image').alt = product.title;
  modal.querySelector('#modal-description').textContent = product.description;
  modal.querySelector('#modal-category').textContent = product.category.charAt(0).toUpperCase() + product.category.slice(1);
  
  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeProductModal() {
  const modal = document.getElementById('product-modal');
  if (!modal) return;
  
  modal.classList.add('hidden');
  document.body.style.overflow = '';
}

// Contact Form Validation
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;
  
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = form.querySelector('#name').value.trim();
    const email = form.querySelector('#email').value.trim();
    const message = form.querySelector('#message').value.trim();
    
    // Validation
    if (!name || !email || !message) {
      showToast('Please fill in all required fields', 'error');
      return;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      showToast('Please enter a valid email address', 'error');
      return;
    }
    
    // Simulate form submission
    showToast('Thank you! We\'ll reach out soon.', 'success');
    form.reset();
  });
}

// Toast Notification
function showToast(message, type = 'success') {
  const toast = document.createElement('div');
  toast.className = `fixed top-4 right-4 px-6 py-3 rounded-lg shadow-lg z-50 transform transition-all duration-300 ${
    type === 'success' 
      ? 'bg-green-500 text-white' 
      : 'bg-red-500 text-white'
  }`;
  toast.textContent = message;
  
  document.body.appendChild(toast);
  
  setTimeout(() => {
    toast.style.opacity = '0';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// Smooth Scroll
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

// Download Catalog Handler
function initDownloadCatalog() {
  const downloadButtons = document.querySelectorAll('#downloadCatalog, #downloadCatalogHeader');
  downloadButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      // Simulate download - replace with actual PDF link
      showToast('Catalog download started', 'success');
      // window.location.href = 'path/to/catalog.pdf';
    });
  });
}

// Initialize on DOM Load
document.addEventListener('DOMContentLoaded', () => {
  initSideDrawer();
  initMobileMenu();
  initAnimatedCounters();
  initContactForm();
  initSmoothScroll();
  initDownloadCatalog();
  
  // Close modal on outside click
  const modal = document.getElementById('product-modal');
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeProductModal();
      }
    });
  }
  
  // Close modal on ESC key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeProductModal();
      // Also close side drawer
      const sideDrawer = document.getElementById('sideDrawer');
      const sideDrawerOverlay = document.getElementById('sideDrawerOverlay');
      if (sideDrawer && sideDrawer.classList.contains('active')) {
        sideDrawer.classList.remove('active');
        if (sideDrawerOverlay) sideDrawerOverlay.classList.remove('active');
        document.body.style.overflow = '';
      }
    }
  });
});

// Hero Slider Functionality
(function() {
    'use strict';
    
    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initHeroSlider);
    } else {
        initHeroSlider();
    }
    
    function initHeroSlider() {
        const slides = document.querySelectorAll('.hero-slide');
        const dots = document.querySelectorAll('.hero-slider-dots .dot');
        const prevBtn = document.querySelector('.hero-slider-btn.prev');
        const nextBtn = document.querySelector('.hero-slider-btn.next');
        
        if (!slides.length) return; // Exit if no slides found
        
        let currentSlide = 0;
        let autoPlayInterval;
        const autoPlayDelay = 5000; // 5 seconds
        
        // Show specific slide
        function showSlide(index) {
            // Wrap around
            if (index >= slides.length) {
                currentSlide = 0;
            } else if (index < 0) {
                currentSlide = slides.length - 1;
            } else {
                currentSlide = index;
            }
            
            // Update slides
            slides.forEach((slide, i) => {
                slide.classList.toggle('active', i === currentSlide);
            });
            
            // Update dots
            dots.forEach((dot, i) => {
                dot.classList.toggle('active', i === currentSlide);
            });
        }
        
        // Next slide
        function nextSlide() {
            showSlide(currentSlide + 1);
        }
        
        // Previous slide
        function prevSlide() {
            showSlide(currentSlide - 1);
        }
        
        // Start auto-play
        function startAutoPlay() {
            stopAutoPlay(); // Clear any existing interval
            autoPlayInterval = setInterval(nextSlide, autoPlayDelay);
        }
        
        // Stop auto-play
        function stopAutoPlay() {
            if (autoPlayInterval) {
                clearInterval(autoPlayInterval);
            }
        }
        
        // Button event listeners
        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                nextSlide();
                stopAutoPlay();
                startAutoPlay(); // Restart auto-play after manual interaction
            });
        }
        
        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                prevSlide();
                stopAutoPlay();
                startAutoPlay();
            });
        }
        
        // Dot event listeners
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                showSlide(index);
                stopAutoPlay();
                startAutoPlay();
            });
        });
        
        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') {
                prevSlide();
                stopAutoPlay();
                startAutoPlay();
            } else if (e.key === 'ArrowRight') {
                nextSlide();
                stopAutoPlay();
                startAutoPlay();
            }
        });
        
        // Pause on hover (desktop only)
        const sliderContainer = document.querySelector('.hero-image-slider');
        if (sliderContainer && window.innerWidth > 768) {
            sliderContainer.addEventListener('mouseenter', stopAutoPlay);
            sliderContainer.addEventListener('mouseleave', startAutoPlay);
        }
        
        // Touch swipe support for mobile
        let touchStartX = 0;
        let touchEndX = 0;
        
        if (sliderContainer) {
            sliderContainer.addEventListener('touchstart', (e) => {
                touchStartX = e.changedTouches[0].screenX;
            }, { passive: true });
            
            sliderContainer.addEventListener('touchend', (e) => {
                touchEndX = e.changedTouches[0].screenX;
                handleSwipe();
            }, { passive: true });
        }
        
        function handleSwipe() {
            const swipeThreshold = 50; // Minimum distance for swipe
            const diff = touchStartX - touchEndX;
            
            if (Math.abs(diff) > swipeThreshold) {
                if (diff > 0) {
                    // Swiped left - next slide
                    nextSlide();
                } else {
                    // Swiped right - previous slide
                    prevSlide();
                }
                stopAutoPlay();
                startAutoPlay();
            }
        }
        
        // Pause auto-play when page is not visible
        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                stopAutoPlay();
            } else {
                startAutoPlay();
            }
        });
        
        // Initialize
        showSlide(0);
        startAutoPlay();
        
        // Clean up on page unload
        window.addEventListener('beforeunload', stopAutoPlay);
    }
})();