
const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);

const aspectRatio = 2;

const width = vw;
const height = width / 2;

//const width = vw < vh / aspectRatio ? vw : vh * 2;
//const height = vw < vh / aspectRatio ? vh * 2 : vw;


export const config = {
    bg: "#101015",
    width: width,
    height: height,
    screenWidth: 100,
    screenHeight: 50
}

export const canvas = document.getElementById('canvas');
export const context = canvas.getContext('2d');

canvas.width = config.width;
canvas.height = config.height;

canvas.style.background = config.bg;

//console.log(canvas);