

function BackgroundChange() {
    const backG = ["url(src/backgrounds/fondo1.jpg)","url(src/backgrounds/fondo2.jpg)","url(src/backgrounds/fondo3.jpg)","url(src/backgrounds/fondo4.jpg)"]
    let idxBackGround = Math.floor(Math.random()*backG.length)
    let bg = backG[idxBackGround]

    document.body.style.backgroundImage = bg  
}

export default BackgroundChange

