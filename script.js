
const box = document.querySelector('.box');
const speedBtns = document.querySelectorAll('[data-setting="speed"]');
const colorBtns = document.querySelectorAll('[data-setting="color"]');
const slider = document.querySelector('#slider');
const sliderInfo = document.querySelector('.slider-info');

//variables
const squares = 150;
let sliderValue = 70;
let range = 360;

//functions
//creating squares

const createSquare = (speed) => {
    box.innerHTML = ""
    for(let i = 0; i < squares; i++){
        const square = document.createElement('div');
        square.classList.add('square')
        square.style.transitionDuration = speed;
        
        square.addEventListener('mouseover', ()=>setColor(square))
        box.appendChild(square);
        square.addEventListener('mouseout', ()=>{
            square.style.backgroundColor = '';
        })
    }

}

//setting square's color
const setColor = (square) => {
    let h //hue

    if(range === 360){
        h = Math.floor(Math.random() * 360)
    }else{
        h = Math.floor(Math.random() * 60) + range;
    }
    const s = slider.value + '%';//seting saturation
    const l = '50%'//setting light
    //adding square's style
    square.style.backgroundColor = `hsl(${h},${s},${l})`
}

//setting duration speed
function handleSpeed () {
    const newSpeed = this.dataset.speed + 's'
    createSquare(newSpeed)
}
//setting color 
function handleColorRange (){
    range = parseInt(this.dataset.colorRange)
   
}

speedBtns.forEach(btn => btn.addEventListener('click', handleSpeed))
colorBtns.forEach(btn => btn.addEventListener('click', handleColorRange))


createSquare()