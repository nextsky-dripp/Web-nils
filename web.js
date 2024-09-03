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