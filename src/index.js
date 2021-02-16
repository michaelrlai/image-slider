const change

const showSlide = function (n) {
    const currentIndex = n;
    const images = document.querySelectorAll("img");
    console.log(images);
    for (let i = 0; i < images.length; i++) {
        images[i].style.display = "none";
    }
    images[currentIndex].style.display = "block";
};

showSlide(0);
