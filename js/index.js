// Your code goes here
let username = '';

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
const logo = document.querySelector('.logo-heading');
const navs = document.querySelectorAll('.nav-link');

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

const header = document.querySelector('.main-navigation');

header.addEventListener('mouseenter', () => {
    header.style.backgroundColor = 'gold';
    header.style.borderBottom = '2px dashed darkslategray';
    header.style.transition = '1s';
    navs.forEach((link) => {
        link.style.fontWeight = 'bold';
        link.style.transitionDelay = '0s';
    })
    logo.style.fontWeight = 'bold';
    logo.style.transitionDelay = '0s';
})

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

let babyBus = document.createElement('img');

babyBus.setAttribute('class', 'tiny-bus-img');
babyBus.setAttribute('src', 'img/tinybus.png');
babyBus.style.width = '5%';
babyBus.style.margin = '-50% 10px 1%';


header.appendChild(babyBus);

let accumulate = 0;

function drive (event) {
    event.preventDefault();
    accumulate = accumulate + 20;
    babyBus.style.transform =  `translateX(${accumulate}%)`;
}

window.addEventListener('wheel', drive);
