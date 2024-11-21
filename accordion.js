// Pseudocode for accordion functionality:
// 1. Grab the accordion buttons from the DOM
// 2. Add event listeners to toggle the content visibility
// 3. Update ARIA attributes to indicate the open/closed state

document.addEventListener("DOMContentLoaded", function () {
  const accordionBtns = document.querySelectorAll(".accordion-trigger");

  //This will help us to lopp through the accordions
  accordionBtns.forEach((accordion) => {
    accordion.addEventListener("click", function () {
      // Code to change aria-expandes to true
      const expanded = this.getAttribute("aria-expanded") === "true" || false;
      this.setAttribute("aria-expanded", !expanded);

      const content = document.getElementById(
        this.getAttribute("aria-controls")
      );

      // This will show the content by remove "hidden"
      if (!expanded) {
        content.removeAttribute("hidden");
      } else {
        content.setAttribute("hidden", "");
      }
    });
  });
});
