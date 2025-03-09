document.addEventListener("scroll", function () {
    let parallaxElements = document.querySelectorAll(".parallax, .parallax-2");

    parallaxElements.forEach(function (element) {
        let scrollPosition = window.scrollY;
        element.style.backgroundPosition = "center " + (scrollPosition * 0.5) + "px";
    });
});
