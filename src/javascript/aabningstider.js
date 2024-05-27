document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll(".animate-right-h1");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.9 }
  );

  elements.forEach((element) => {
    observer.observe(element);
  });
});
