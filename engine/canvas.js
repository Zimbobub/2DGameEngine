
export const config = {
    bg: "#101015",
    width: window.innerWidth,
    height: window.innerHeight
}

export const canvas = document.getElementById('canvas');
export const context = canvas.getContext('2d');

canvas.width = config.width;
canvas.height = config.height;

canvas.style.background = config.bg;

//console.log(canvas);