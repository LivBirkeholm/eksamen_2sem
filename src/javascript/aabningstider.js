document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll(".animate-right-h1");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-right-h1"); // Tilføj animationsklassen når elementet er i viewporten
        }
      });
    },
    { threshold: 0.8 }
  ); // Ændre tærskelværdien til 0,8

  elements.forEach((element) => {
    observer.observe(element);
  });
});
