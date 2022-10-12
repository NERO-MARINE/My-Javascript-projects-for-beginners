const circle = document.querySelector('#circle');

circle.addEventListener('mouseenter', () => {
  if (!circle.classList.contains('hover')) {
       circle.classList.remove('active');
       circle.classList.add('hover');
       circle.innerHTML = 'leave';
       
  }
});

circle.addEventListener('mouseleave', () => {
  if (circle.classList.contains('hover')) {
       circle.classList.remove('hover');
       circle.innerHTML = 'Enter';
       circle.classList.add('active');
  }
});
