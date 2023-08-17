function fadeInOnScroll() {

 const fadeElements = document.querySelectorAll('.hidden');

const animages = document.querySelectorAll('.roll img');

 function checkFade() {
  fadeElements.forEach((element) => {
   const elementTop = element.getBoundingClientRect().top;
   const elementBottom = element.getBoundingClientRect().bottom;

   // Check if the element is in the viewport
   if (elementTop < window.innerHeight && elementBottom >= 0) {
    /*element.style.opacity = 1;
    element.style.transform = 'translateX(10px)';*/
    element.classList.add('show')
   } else {
    element.classList.remove('show');

   }
  });
 }

 // Initial check when the page loads
 checkFade();

 // Check fade on scroll
 window.addEventListener('scroll', checkFade);
}

fadeInOnScroll();






/*
const observer = new IntersectionObserver((entries) => {

  entries.forEach((entry) => {

    console.log(entry)

  if (entry.isIntersecting) {
   entry.target.classList.add("show")
    entry.target.classList.remove("hidden")
  
  } else {
   entry.target.classList.remove('show');
   entry.target.classList.add("hidden")
  }

});


let el = document.querySelectorAll('.hidden')
const hiddenElements = document.querySelectorAll(".hidden"); 

hiddenElements.forEach((el) => {
  observer.observe(el)
 })

}); */