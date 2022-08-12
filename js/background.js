const images = [
    "0.jpg",
    "1.jpg",
    "2.jpg",
];

const choosenImage = images[Math.floor(Math.random() * images.length)];

// element 생성
// const bgImage = document.createElement("img");

// bgImage.id = "wallpaper";
// bgImage.src = `img/${choosenImage}`;
// bgImage.style = "max-width: 100%; height: auto;";

// element 추가
// document.body.appendChild(bgImage);

document.body.style = `background-image: url("img/${choosenImage}"); background-size: 100%, auto; background-repeat: no-repeat;`;