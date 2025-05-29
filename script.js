// Placeholder for future JavaScript
// You can add scroll animations, newsletter form handling, or interactivity here
document.getElementById("newsletter-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const email = this.querySelector("input").value;
  alert(`Thanks for subscribing, ${email}! 🌊`);
  this.reset();
});
console.log("Comfort Soles Landing Page Loaded");
