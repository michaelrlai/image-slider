const slideshow = (function () {
    const controls = (function () {
        document.addEventListener("click", function (e) {
            console.log(e.target);
            if (e.target.matches(".previous")) previousNext(-1);
            if (e.target.matches(".next")) previousNext(1);
            if (e.target.matches(".dot")) {
                currentIndex = Number(e.target.id);
                showSlide();
                console.log(e.target.id);
            }
        });
    })();

    const previousNext = function (n) {
        currentIndex += n;
        showSlide();
        console.log(currentIndex);
    };

    const showSlide = function () {
        const images = document.querySelectorAll("img");
        for (let i = 0; i < images.length; i++) {
            images[i].style.display = "none";
        }

        const dots = document.querySelectorAll(".dot");
        for (let j = 0; j < dots.length; j++) {
            dots[j].classList.remove("selected");
        }

        if (currentIndex < 0) currentIndex = images.length - 1;
        if (currentIndex === images.length) currentIndex = 0;
        images[currentIndex].style.display = "block";
        dots[currentIndex].classList.add("selected");
    };

    let currentIndex = 0;

    showSlide(currentIndex);
})();
