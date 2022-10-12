const accordion_headers = document.querySelectorAll('.accordion-header');
// console.log(accordion_header)

accordion_headers.forEach((accordionHeader)=>{
    accordionHeader.addEventListener('click',()=>{
    accordionHeader.classList.toggle('active');
  })
})
