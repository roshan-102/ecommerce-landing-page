document.addEventListener('DOMContentLoaded', () => {
  const addToCartButtons = document.querySelectorAll('.add-to-cart');
  const cartCount = document.querySelector('.cart-count');
  const searchIcon = document.querySelector('.fa-search');
  const searchContainer = document.getElementById('search-container');
  const closeSearch = document.getElementById('close-search');
  const searchInput = document.getElementById('search-input');
  const productCards = document.querySelectorAll('.product-card');

  let count = parseInt(cartCount.textContent) || 0;

  
  addToCartButtons.forEach((button) => {
    button.addEventListener('click', () => {
      count++;
      cartCount.textContent = count;

      const confirmation = document.createElement('div');
      confirmation.textContent = 'Added to cart!';
      confirmation.classList.add('confirmation-popup');
      button.parentElement.appendChild(confirmation);

      setTimeout(() => {
        confirmation.remove();
      }, 1500);
    });
  });

  
  searchIcon.addEventListener('click', () => {
    searchContainer.classList.add('show');
    searchInput.focus(); 
  });

  closeSearch.addEventListener('click', () => {
    searchContainer.classList.remove('show');
    searchInput.value = '';
    productCards.forEach(card => card.style.display = 'block'); 
  });


  searchInput.addEventListener('input', () => {
    const query = searchInput.value.trim().toLowerCase();

    productCards.forEach(card => {
      const name = card.dataset.name.toLowerCase();
      if (name.includes(query)) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
});
