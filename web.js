// Scroll to a specific position
window.scrollTo(0, 500); // Scroll 500 pixels down from the top
// Animate the scroll
function scrollDown() {
    window.scrollBy(0, 10); // Scroll 10 pixels down
    if (window.scrollY < 500) { // Stop at 500 pixels from the top
      setTimeout(scrollDown, 16); // Call again after 16ms (approx. 60fps)
    }
  }
  scrollDown();
      /* Add this JavaScript code */
      function parallaxScroll() {
        if (document.body === null) {
          console.error('document.body is null');
          return;
        }
        var scrollPosition = window.scrollY;
        if (isNaN(scrollPosition)) {
          console.error('window.scrollY is NaN');
          return;
        }
        try {
          document.body.style.backgroundPosition = '0px ' + (scrollPosition * 0.5) + 'px';
        } catch (e) {
          console.error('parallaxScroll(): ' + e.message);
        }
      }
      
      window.addEventListener('scroll', parallaxScroll);
