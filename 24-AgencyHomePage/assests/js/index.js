const button = document.getElementById("btn");
const list = document.querySelector(".faq-card-mini");
console.log(list);
button.addEventListener('click', function () {
    list.classList.toggle("faq-card-big");
});


// .nav {
//     width: 100%;
//     height: 60px;
//     background-color: cadetblue;
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
// }
// .list{
//     width: 1200px;
//     height: 0px;
//     overflow: hidden;
//     transition: 1s;
//     margin: 0 auto;
//     background-color: brown;
// }
// .list_open{
//     width: 1200px;
//     height: 110px;
//     transition: 1s;
//     background-color: brown; 
// }
// .si{
//     max-width: 1400px;
//     background-color: cadetblue;
// }
