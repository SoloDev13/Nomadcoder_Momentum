const images = [
    "0.jpg",
    "1.jpg",
    "2.jpg",
];

const choosenImage = images[Math.floor(Math.random() * images.length)];

// element 생성
const bgImage = document.createElement("img");

bgImage.src = `img/${choosenImage}`;

// element 추가
document.body.appendChild(bgImage);