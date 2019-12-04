// Your code goes here
let username = '';

// Prompts for a name
window.addEventListener('load', (event) => {
    username = prompt("Welcome to Fun Bus! What's your name?");
    if (username == null || username == "") {
        txt = "Uh oh! No name was entered! Your new name is Human.";
        username = 'Human';
    } else {
        txt = "Thank you!";
    }
    alert(txt);
})

// Selects logo and nav links
const logo = document.querySelector('.logo-heading');
const navs = document.querySelectorAll('.nav-link');

// add an alert for clicking on each link
navs[1].addEventListener('click', () => {
    txt = `Hey, ${username}, our About Us page is currently under construction. Feel free to explore the rest of our FUN site!`
    alert(txt);
})

navs[2].addEventListener('click', () => {
    txt = `I'm sure you, ${username}, were excited to read about some great travels. However, our Blog is not ready for public consumption yet. You can travel through the rest of our page though!`
    alert(txt);
})

navs[3].addEventListener('click', () => {
    txt = `Hi, ${username}! Thank you for your interest. The contact page will be updated soon! 😊`;
    alert(txt);
})

// selects header
const header = document.querySelector('.main-navigation');

// Changes header, nav, and logo styles when mouse is over header
header.addEventListener('mouseenter', () => {
    header.style.backgroundColor = 'gold';
    logo.style.color = 'black';
    header.style.borderBottom = '2px dashed darkslategray';
    header.style.transition = '1s';
    navs.forEach((link) => {
        link.style.fontWeight = 'bold';
        link.style.transitionDelay = '0s';
    })
    logo.style.fontWeight = 'bold';
    logo.style.transitionDelay = '0s';
})

// Changes header, nav, and logo styles when mouse is leaves header
header.addEventListener('mouseleave', () => {
    header.style.backgroundColor = 'lightyellow';
    header.style.borderBottom = '2px dashed #C0C0C0';
    header.style.transition = '1s';
    navs.forEach((link) => {
        link.style.fontWeight = 'normal';
        link.style.transitionDelay = '0.33s';
    })
    logo.style.fontWeight = 'normal';
    logo.style.transitionDelay = '0.33s';
})

// Create tiny bus picture

let babyBus = document.createElement('img');

babyBus.setAttribute('class', 'tiny-bus-img');
babyBus.setAttribute('src', 'img/tinybus.png');
babyBus.style.width = '5%';
babyBus.style.margin = '-50% 10px 1%';


header.appendChild(babyBus);

// make tiny bus picture move across the screen as you scroll up and down
let accumulate = 0;
let screenWidth = screen.width + 475;

function drive (event) {
    if (accumulate > screenWidth) {
        babyBus.style.transform = `translateX(${accumulate}%)`;
        
    } else {
        accumulate = accumulate + 75;
        babyBus.style.transform =  `translateX(${accumulate}%)`;
    }
}

window.addEventListener('wheel', drive);

// create number input
let btn1 = document.createElement('button');
let btn2 = document.createElement('button');
let btn3 = document.createElement('button');
let btn4 = document.createElement('button');

btn1.textContent = '1️⃣'
btn1.style.color = 'white';
btn1.style.backgroundColor = 'black';
btn1.style.border = '3px outset grey';
btn1.style.fontFamily = "'Indie Flower', cursive";
btn1.style.fontSize = '2rem';
btn1.style.padding = '5px';
btn1.style.width = '50px';
btn1.style.position = 'fixed';
btn1.style.bottom = '0';
btn1.style.textAlign = 'center';

btn2.textContent = '2️⃣'
btn2.style.color = 'white';
btn2.style.backgroundColor = 'black';
btn2.style.border = '3px outset grey';
btn2.style.fontFamily = "'Indie Flower', cursive";
btn2.style.fontSize = '2rem';
btn2.style.padding = '5px';
btn2.style.width = '50px';
btn2.style.position = 'fixed';
btn2.style.bottom = '0';
btn2.style.left = '49px';
btn2.style.textAlign = 'center';

btn3.textContent = '3️⃣'
btn3.style.color = 'white';
btn3.style.backgroundColor = 'black';
btn3.style.border = '3px outset grey';
btn3.style.fontFamily = "'Indie Flower', cursive";
btn3.style.fontSize = '2rem';
btn3.style.padding = '5px';
btn3.style.width = '50px';
btn3.style.position = 'fixed';
btn3.style.bottom = '0';
btn3.style.left = '98px';
btn3.style.textAlign = 'center';

btn4.textContent = '🔃'
btn4.style.color = 'white';
btn4.style.backgroundColor = 'black';
btn4.style.border = '3px outset grey';
btn4.style.fontFamily = "'Indie Flower', cursive";
btn4.style.fontSize = '2rem';
btn4.style.padding = '5px';
btn4.style.width = '50px';
btn4.style.position = 'fixed';
btn4.style.bottom = '0';
btn4.style.left = '147px';
btn4.style.textAlign = 'center';

let inputDivParent = document.querySelector('html');

inputDivParent.appendChild(btn1);
inputDivParent.appendChild(btn2);
inputDivParent.appendChild(btn3);
inputDivParent.appendChild(btn4);

// COLORS...ALL THE COLORS!
let body = document.querySelector('body');
let pictures = document.querySelectorAll('img');
let bottomBtns = document.querySelectorAll('.btn');

btn1.addEventListener('dblclick', () => {
    body.style.backgroundColor = 'darkred';
    body.style.color = 'khaki';
    pictures[1].style.border = '5px solid khaki';
    pictures[2].style.border = '5px solid khaki';
    pictures[3].style.border = '5px solid khaki';
    pictures[4].style.border = '5px solid khaki';
})

btn2.addEventListener('dblclick', () => {
    body.style.backgroundImage = "url('https://media.giphy.com/media/xT1XGMbENXj5IMKtnG/giphy.gif')";
    body.style.backgroundSize = 'cover';
    body.style.color = 'black';
    body.style.fontWeight = 'bold';
    pictures[1].setAttribute('src', 'https://media.giphy.com/media/J1ZajKJKzD0PK/giphy.gif');
    pictures[1].style.width = '100%';
    pictures[1].style.border = '5px solid black';
    pictures[2].setAttribute('src', 'https://media.giphy.com/media/X6hiFJjvTDAAw/giphy.gif');
    pictures[2].style.border = '5px solid black';
    pictures[3].setAttribute('src', 'https://media.giphy.com/media/69v84erf3XFMqIH0bL/giphy.gif');
    pictures[3].style.border = '5px solid black';
    pictures[4].setAttribute('src', 'https://media.giphy.com/media/WWYSFIZo4fsLC/giphy.gif');
    pictures[4].style.border = '5px solid black';
    bottomBtns[0].style.backgroundImage = "url('https://media.giphy.com/media/3bc8pP1rVdfgN1uoMV/giphy.gif')";
    bottomBtns[0].style.color = 'black';
    bottomBtns[0].style.fontWeight = 'bold';
    bottomBtns[1].style.backgroundImage = "url('https://media.giphy.com/media/OTYiFlofk3EaI/giphy.gif')";
    bottomBtns[1].style.color = 'black';
    bottomBtns[1].style.fontWeight = 'bold';
    bottomBtns[2].style.backgroundImage = "url('https://media.giphy.com/media/3ov9jQqeeHygU7zXrO/giphy.gif/giphy.gif')";
    bottomBtns[2].style.color = 'white';
    bottomBtns[2].style.fontWeight = 'bold';
})

btn3.addEventListener('dblclick', () => {
    body.style.backgroundColor = 'lime';
    body.style.color = 'navy';
    pictures[1].style.border = '5px solid navy';
    pictures[2].style.border = '5px solid navy';
    pictures[3].style.border = '5px solid navy';
    pictures[4].style.border = '5px solid navy';
})

btn4.addEventListener('dblclick', () => {
    location.reload();
})


/*
navs.forEach((link) => {
        link.style.fontWeight = 'bold';
        link.style.transitionDelay = '0s';
    })
*/