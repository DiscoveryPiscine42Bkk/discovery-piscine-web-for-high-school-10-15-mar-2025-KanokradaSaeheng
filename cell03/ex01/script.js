const balloon = document.getElementById("balloon");

let size = 200;
const colors = ["red", "green", "blue"];
let colorIndex = 0;

balloon.addEventListener("click", () => {
    size += 10;
    colorIndex = (colorIndex + 1) % colors.length;
    
    if (size > 420) {
        size = 200; // Reset to original size
        colorIndex = 0;
    }

    updateBalloon();
});

balloon.addEventListener("mouseenter", () => {
    if (size > 200) {
        size -= 5;
        colorIndex = (colorIndex - 1 + colors.length) % colors.length;
        updateBalloon();
    }
});

function updateBalloon() {
    balloon.style.width = `${size}px`;
    balloon.style.height = `${size}px`;
    balloon.style.backgroundColor = colors[colorIndex];
}
