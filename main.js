// Wait for the document to fully load
document.addEventListener("DOMContentLoaded", function () {
    const welcomeEl = document.getElementById("welcome");
    let hue = 0;
  
    // Basic animation: Continuously update text color using HSL
    function animateTextColor() {
      hue = (hue + 1) % 360; // Cycle hue from 0 to 359
      welcomeEl.style.color = `hsl(${hue}, 100%, 70%)`;
      requestAnimationFrame(animateTextColor);
    }
  
    animateTextColor();
  });
  