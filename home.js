
function openTab(evt, tabName) {
    const tabContent = document.querySelectorAll('.tab-content');
    const tabLinks = document.querySelectorAll('.tab-link');
  
    
    tabContent.forEach(content => content.style.display = 'none');
  
    
    tabLinks.forEach(link => link.classList.remove('active'));
  
    document.getElementById(tabName).style.display = 'block';
    evt.currentTarget.classList.add('active');
  }
  

  document.querySelector('.tab-link').click();
  

  function redirectToProductPage() {
    window.location.href = "/product-page";  
  }
  