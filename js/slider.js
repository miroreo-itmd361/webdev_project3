const images = [
  "./images/slideshow1.jpg",
  "./images/slideshow2.jpg",
  "./images/slideshow3.jpg",
  "./images/slideshow4.jpg",
  "./images/slideshow5.jpg",
  "./images/slideshow6.jpg",
];

const carousel = document.getElementById("photo-carousel");

let currentImage = 0;

const previousIndex = () => {
    if (currentImage == 0) {
        return images.length - 1;
    } else {
        return currentImage - 1;
    }
}
const nextIndex = () => {
    if (currentImage == images.length - 1) {
        return 0;
    } else {
        return currentImage + 1;
    }
}
const nextImage = () => {
    currentImage = nextIndex();
    document.getElementById("slider").value = currentImage;
    hydrate();
}
const prevImage = () => {
    currentImage = previousIndex();
    document.getElementById("slider").value = currentImage;
    hydrate();
}
const setImage = (num) => {
    if(images[num] != undefined) {
        currentImage = num;
        hydrate();
    }
}
const hydrate = () => {
    carousel.innerHTML = `<img src="${images[currentImage]}" class="carousel-item" alt="Image ${currentImage}"/>`
}
const sliderChange = () => {
    setImage(document.getElementById("slider").value);
}
hydrate();