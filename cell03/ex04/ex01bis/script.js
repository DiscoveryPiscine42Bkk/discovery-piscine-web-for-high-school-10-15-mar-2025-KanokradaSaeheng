$(document).ready(function () {
    let size = 200;
    const maxSize = 420;
    const minSize = 200;
    const colors = ["red", "green", "blue"];
    let colorIndex = 0;

    $("#balloon").click(function () {
        size += 10;
        colorIndex = (colorIndex + 1) % colors.length;

        if (size > maxSize) {
            size = minSize; // Reset size when exceeding max size
        }

        $(this).css({
            width: size + "px",
            height: size + "px",
            backgroundColor: colors[colorIndex]
        });
    });

    $("#balloon").mouseleave(function () {
        if (size > minSize) {
            size -= 5;
            colorIndex = (colorIndex - 1 + colors.length) % colors.length;
        }

        $(this).css({
            width: size + "px",
            height: size + "px",
            backgroundColor: colors[colorIndex]
        });
    });
});
