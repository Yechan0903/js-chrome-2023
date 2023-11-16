const images = [
    "itzy1.jpg",
    "itzy2.jpg",
    "itzy3.jpg"
]

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);