const footer = document.getElementById("footer");
const secondDiv = document.getElementById("mid-footer");

function displaySecondDiv() {
    const position = window.scrollY - (footer.offsetTop - window.innerHeight)
    if (position >= -100) {
        secondDiv.style.display = "block";
        secondDiv.style.animationPlayState = "running";
    } else {
        secondDiv.style.display = "none";
    }
}

window.addEventListener("scroll", displaySecondDiv);

