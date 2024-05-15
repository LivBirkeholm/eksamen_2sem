document.addEventListener("DOMContentLoaded", function () {
  const image = document.querySelector(".grid_2 img");
  const text = document.querySelector(".grid_2 .tekst");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        if (entry.target === image) {
          image.classList.add("animate-left");
        } else if (entry.target === text) {
          text.classList.add("animate-right");
        }
      }
    });
  });

  observer.observe(image);
  observer.observe(text);
});
