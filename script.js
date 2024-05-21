// add the name of each image title here
const imageNames = ["artist1.jpg", "artist2.jpg", "artist3.jpg", "artist4.jpg"];

const sliderItems = imageNames.concat(imageNames);
const sliders = document.querySelectorAll(".slide-track");

sliders.forEach((slider, index) => {
  slider.innerHTML = ""; // Kosongkan isi slider sebelum menambahkan gambar

  sliderItems.forEach((sliderItem) => {
    const img = document.createElement("img");
    img.src = "/images/" + sliderItem; //path to your folder image
    img.className = "slide-item";
    slider.appendChild(img);
  });
});

