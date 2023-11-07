let cat
let grass
let food

let foodX = 512
let foodY = 512

let tamanho = 64
let catX = 0
let catY = 0

let msg = document.querySelector('.begin')
let txt = document.querySelector('.text')
let canMove = false

let count = 0
let contador = document.querySelector('span')

let timer
let ele = document.querySelector('.timer')
var sec = 20

function setup() {
    createCanvas(576, 576)
    
    cat = loadImage('cat.png')
    grass = loadImage('grass.png')
    food = loadImage('ração.png')
}

function draw() {
    for (let x = 0; x < 9; x++) {
        for (let y = 0; y < 9; y++) {
            image(grass, x*tamanho, y*tamanho, tamanho, tamanho);
        }
    }

    image(food, foodX, foodY, tamanho, tamanho)
    image(cat, catX, catY, tamanho, tamanho)

    if(foodX == catX && foodY == catY) {
        foodX = Math.floor(Math.random()*9)*tamanho
        foodY = Math.floor(Math.random()*9)*tamanho

        count += 1
        contador.innerHTML = count
    }

    if(sec <= -1) {
        clearInterval(timer)
        canMove = false
        txt.innerHTML = 'BOA! O GATO COMEU '+count +' VEZES, ACABOU A FOME!'
        msg.style.display = 'block'
    }

    text(`X = ${catX}    Y = ${catY}`, 0, 576)
}

function keyPressed() {
    if (canMove) {
        // W
        if ((keyIsDown(87) || keyIsDown(38)) && catY > 0) {
            catY -= 64;
        }
        // S
        if ((keyIsDown(83) || keyIsDown(40)) && catY < 512) {
            catY += 64;
        }
        // A
        if ((keyIsDown(65) || keyIsDown(37)) && catX > 0) {
            catX -= 64;
        }
        // D
        if ((keyIsDown(68) || keyIsDown(39)) && catX < 512) {
            catX += 64;
        }
    }
}

function confirma() {
    msg.style.display = 'none'
    canMove = true
    timeOut()
    catX = 0
    catY = 0
    sec = 20
    count = 0
}

function timeOut() {
        timer = setInterval(()=> {
            ele.innerHTML = sec +'s'
            sec--
        },1000)
}