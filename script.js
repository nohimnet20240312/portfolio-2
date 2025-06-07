
let dark = true
document.addEventListener('keypress', (e) => {
  console.log(e.key);
  let key = e.key
  if (e.key == 'q') {
    console.log('hello');
    if (!dark) {
      dark = true;
      document.documentElement.style.setProperty('--parchment', "rgb(244, 233, 205)");
      document.documentElement.style.setProperty('--cambridge-blue', "#77aca2ff");

    }
    else {
      dark = false
      document.documentElement.style.setProperty('--parchment', "");
      document.documentElement.style.setProperty('--cambridge-blue', "");
    }
  }
})

'use strict';

const insertSection = document.querySelector('.about-col-2');
const codingSnippetRadio = Array.from(document.querySelectorAll('input[name="select-tab"]'))
const codingSnippetRadioContainer = document.querySelector('.coding-snippet-container-row--1')
const codingSnipperRow2 = document.querySelector('.coding-snippet-container-row--2')
const div = document.querySelector(".animated-pointer");


const nav = document.querySelector('nav.navigation')
document.addEventListener('scroll', () => {
  if (window.scrollY > 200) {
    nav.classList.add('stick')
    div.classList.add('hidden')
  }
  else {
    nav.classList.remove('stick')
  }
})

codingSnippetRadio.forEach(el => {
  console.log(el.checked);
})
function setCodingSnippet(text) {
  codingSnipperRow2.classList.add('visibility')
  setTimeout(() => {
    codingSnipperRow2.classList.remove('visibility')
  }, 400);
  codingSnipperRow2.textContent = `${text}`
}
function manageSnippet() {
  codingSnippetRadio.forEach(el => el.closest('.coding-snippet-container-row--1-col').classList.remove('bright'))
  const clickedRadio = document.querySelector('input[name="select-tab"]:checked');
  const closestDiv = clickedRadio.closest('.coding-snippet-container-row--1-col');
  const clickedRadioId = clickedRadio.id;

  if (clickedRadioId == 'index') {
    setCodingSnippet(`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="./style.css" />
    <link rel="stylesheet" href="./about.css" />
    <link rel="stylesheet" href="./coding-snippet.css" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap"
      rel="stylesheet"
    />
    <script async src="./script.js"></script>
  </head>
  <body>
    <header>
      <nav id="navigation">
        <div class="nav-col-1">
          <h1>Nohim</h1>
          <p>Computer scientist</p>
        </div>
        <div class="nav-col-2">
          <a href="">About</a>
          <a href="">Projects</a>
          <a href="">Struggles</a>
          <a href="">Contact</a>
        </div>
      </nav>
    </header>
    <main>
      <section id="about" class="tab">
        <div class="about-c
`
    )
  }
  else if (clickedRadioId == 'css') {
    setCodingSnippet(`coding-snippet-container {
  width: 500px;
  height: 500px;
  background-color: var(--code-snippet-background);
  border-radius: 20px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 0.1fr 1fr;
  /* padding: 16px; */
  box-shadow: 0px 0px 10px 2px #00000065;
  overflow: hidden;
}
.coding-snippet-container-row--1 {
  display: grid;
  grid-template-columns: repeat(3,1fr);
  grid-template-rows: 1fr;
  text-align: center;
  gap: 0.05em;
}
.coding-snippet-container-row--1 > * {
  background-color: var(--code-snippet-background);
  filter: brightness(60%);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.1s ease-in;
}
.coding-snippet-container-row--1 > :hover {
  filter: brightness(70%);
}
.coding-snippet-container-row--1 > :nth-child(1) {
  border-top-left-radius: 20px;
}
.coding-snippet-container-row--1 > :last-child {
  border-top-right-radius: 20px;
}`

    )
  }
  else if (clickedRadioId == 'script') {
    setCodingSnippet(`'use strict';

const insertSection = document.querySelector('.about-col-2');
const codingSnippetRadio = Array.from(document.querySelectorAll('input[name="select-tab"]'))
const codingSnippetRadioContainer = document.querySelector('.coding-snippet-container-row--1')
const codingSnipperRow2 = document.querySelector('.coding-snippet-container-row--2')
codingSnippetRadio.forEach(el => {
    console.log(el.checked);
})
function manageSnippet() {
    codingSnippetRadio.forEach(el=> el.closest('.coding-snippet-container-row--1-col').classList.remove('bright'))
    const clickedRadio = document.querySelector('input[name="select-tab"]:checked');
    const closestDiv = clickedRadio.closest('.coding-snippet-container-row--1-col');
    const clickedRadioId = clickedRadio.id;
`
    )
  }



  closestDiv.classList.add('bright');

}
manageSnippet()
codingSnippetRadioContainer.addEventListener('click', (e) => {
  manageSnippet()
})

class typeWriter {
  constructor(typeWords, el, speed, waitPeriod = 1) {
    this.speed = speed
    const wordsUn = typeWords.split(',')
    const inTheMiddle = typeWords.split(':')
    let words = []
    let waitStr = ''
    for (let i = 0; i < waitPeriod; i++) {
      waitStr += ' '
    }

    wordsUn.forEach((el => {
      words.push(el.trim()[0].toUpperCase() + el.trim().slice(1, el.length) + waitStr)
    }))


    let i = 0
    let k = 0
    this.speed = speed

    el.textContent = '  '
    let reversing = false

    const typingAnimation = setInterval(() => {
      if (!reversing) {
        el.textContent += words[k][i]
        if (i === words[k].length - 1) {
          reversing = true
          return
        }
        i++
      }
    }, this.speed)

    const clearAnimation = setInterval(() => {
      if (reversing) {
        el.textContent = words[k].slice(0, i)
        if (i === 0) {
          reversing = false
          if (k === words.length - 1) {
            k = 0
            return
          }
          k++
          return
        }
        i--;
      }
    }, this.speed);
  }

  speedUp() {
    this.speed -= 200
    console.log(this.speed);
  }

}
let clock = () => new Date().getHours()
let minutes = () => new Date().getMinutes()
let sec = () => new Date().getSeconds()
// setInterval(() => {
//   clock = () => new Date().getHours()
//   minutes = () => new Date().getMinutes()
//   sec = () => new Date().getSeconds()

// }, 1000);
// console.log(clock());
const hero_title = document.querySelector('.hero-title')
const header = document.querySelector('header')
new
  typeWriter
  (`Hello I am Nohim!,Software Engineer,3D modeller,Westminster Uni, PCB designer, Robotics enthusiast`, hero_title, 80, 10)

header.addEventListener("mousemove", (event) => {
  div.classList.remove('hidden')
  div.style.left = `${event.clientX}px`;
  div.style.top = `${event.clientY}px`;
  div.style.transform = "translate(-50%, -50%)"; // Center around cursor

});

// const stext = Array.from(document.querySelectorAll('.main-sections-section--2-col'));
// const ulList = document.createElement('ul')
// let modifiedText = []

// stext.forEach(el => {
//   let text = el.textContent.trim().split('')
//   console.log(text);
//   let count = 0;
//   let limit = 50
//   text.forEach(el => {
//     count++
//     if (count > limit) {
//       count = 0
//       modifiedText.push(`<li>${text.slice(count,limit).join("")}</li>`)
//     }
//     console.log(modifiedText);
//   })
//   modifiedText.forEach(el => {
//     ulList.insertAdjacentHTML('beforeend',el)
//   })
//   el.text = ""
//   el.appendChild(ulList);


// })


