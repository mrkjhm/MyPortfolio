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
    typeSpeed: 50,
    backSpeed: 50,
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