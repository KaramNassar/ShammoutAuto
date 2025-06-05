document.querySelectorAll('.compare-btn').forEach(btn => {
  btn.addEventListener('click', function(e) {
    e.preventDefault();
    
    const carData = {
      id: this.getAttribute('data-car-id'),
      name: this.getAttribute('data-car-name'),
      image: this.getAttribute('data-car-image'),
      price: this.getAttribute('data-car-price'),
      specs: this.getAttribute('data-car-specs')
    };
    
    // حفظ السيارة الأولى في localStorage
    localStorage.setItem('firstCarToCompare', JSON.stringify(carData));
    
    // توجيه المستخدم لصفحة المقارنة
    window.location.href = 'compare.html';
  });
});