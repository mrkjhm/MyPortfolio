// function getProduct(num1, num2) {
//     if (typeof num1 !== 'number' && typeof num2 !== 'number') {
//         return 'Error: both eme';
//     }

//     return num1 * num2
// }

// let product = getProduct(25,2)
// console.log(product)


var typed = new Typed(".auto-type", {
    strings: ["Multimedia Designer", "Web Developer"],
    typeSpeed: 70,
    backSpeed: 70,
    loop: true,
})


const container_1 = document.querySelector('.container_1')
container_1.addEventListener('click', () => {
    container_1.classList.toggle('open')
})

const container_2 = document.querySelector('.container_2')
container_2.addEventListener('click', () => {
    container_2.classList.toggle('open')
})


let intro = document.querySelector('.intro')
let span1 = document.querySelector('.span-header')
let logoSpan = document.querySelectorAll('.span1')

window.addEventListener('DOMContentLoaded', ()=> {

    setTimeout(() => {
        logoSpan.forEach((span, idx)=> {
            setTimeout(() => {
                span.classList.add('active');
            }, (idx + 1) * 400)
        })

        setTimeout(() => {
            logoSpan.forEach((span, idx) => {
                setTimeout(() => {
                    span.classList.remove('active')
                    span.classList.add('fade')
                }, (idx + 1) * 50)
            })
        }, 2000)

        setTimeout(() => {
            intro.style.top = '-100vh'
        }, 2300)
    })
})



// let tl = gsap.timeline({scrollTrigger: {
//     trigger: "#main",
//     markers: true,
//     start: "50% 50%",
//     end: "100% 50%",
//     scrub:2,
//     pin: true
// }})

// tl
// .to("#top", {
//     top: "-50%"
// }, 'a')
// .to("#bottom", {
//     bottom: "-50%"
// }, 'a')
// .to("#top-h", {
//     top: "80%"
// }, 'a')
// .to("#bottom-h", {
//     bottom: "-80%"
// }, 'a')
