// Expo Carousel Functionality
function initExpoCarousel() {
  const track = document.getElementById('expoTrack');
  const prevBtn = document.getElementById('expoPrev');
  const nextBtn = document.getElementById('expoNext');
  const indicators = document.querySelectorAll('.carousel-indicators .indicator');
  
  if (!track) return;
  
  let currentSlide = 0;
  const slides = track.querySelectorAll('.carousel-slide');
  const totalSlides = slides.length;
  
  function updateCarousel() {
    track.style.transform = `translateX(-${currentSlide * 100}%)`;
    
    // Update indicators
    indicators.forEach((indicator, index) => {
      if (index === currentSlide) {
        indicator.classList.add('active');
      } else {
        indicator.classList.remove('active');
      }
    });
  }
  
  function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateCarousel();
  }
  
  function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateCarousel();
  }
  
  if (nextBtn) {
    nextBtn.addEventListener('click', nextSlide);
  }
  
  if (prevBtn) {
    prevBtn.addEventListener('click', prevSlide);
  }
  
  // Indicator clicks
  indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
      currentSlide = index;
      updateCarousel();
    });
  });
  
  // Auto-play (optional)
  // setInterval(nextSlide, 5000);
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', initExpoCarousel);

