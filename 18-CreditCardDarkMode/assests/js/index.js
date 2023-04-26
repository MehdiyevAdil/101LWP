const sun = document.getElementById('sun');
const container = document.querySelector('.container');
console.log(container);
console.log(sun);
sun.addEventListener('click', function () {
    container.classList.toggle("dark_card");


})


