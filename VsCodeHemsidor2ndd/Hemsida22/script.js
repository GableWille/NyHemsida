
  window.addEventListener("DOMContentLoaded", () => {
    const thumbnails = document.querySelectorAll(".thumb");
    const slider = document.querySelector(".slider");

    if (!slider || thumbnails.length === 0) {
      console.error("slider eller thumbnails hittades inte!");
      return;
    }

    thumbnails.forEach(thumb => {
      thumb.addEventListener("click", () => {
        const index = parseInt(thumb.dataset.index);
        slider.style.transform = `translateX(-${index * 100}%)`;

        thumbnails.forEach(t => t.classList.remove("active"));
        thumb.classList.add("active");
      });
    });
  });

