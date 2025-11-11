// Product Filtering
function initProductFilter() {
  const filterButtons = document.querySelectorAll('[data-filter]');
  const productCards = document.querySelectorAll('[data-product]');
  
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      const category = button.getAttribute('data-filter');
      
      // Update active button
      filterButtons.forEach(btn => {
        btn.classList.remove('bg-primary', 'text-white');
        btn.classList.add('bg-white', 'text-primary', 'border');
      });
      button.classList.add('bg-primary', 'text-white');
      button.classList.remove('bg-white', 'text-primary', 'border');
      
      // Filter products
      productCards.forEach(card => {
        const productCategory = card.getAttribute('data-product');
        if (category === 'all' || productCategory === category) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', initProductFilter);

