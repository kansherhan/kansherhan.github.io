let splide = null;

window.addEventListener("load", function () {
  splide = new Splide(".splide", {
    pagination: false,
    type: "loop",
    perPage: 1,
    autoplay: true,
    interval: 5000,
  });

  splide.mount();
});
