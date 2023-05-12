// personal navbae hanburger menu started
const icon = document.getElementById("icon");
const list = document.querySelector(".list");
console.log(list);
console.log(icon);

icon.addEventListener('click', function () {
        list.classList.toggle("list_open");

});
// personal navbae hanburger menu end

// ---------------------------------------------------------------------------------
// personal card country started
const personal = document.querySelector('.personal-clients-saying__card');
// btn.className = "button-one";
// btn.classList.add('button-info');
// btn.innerText = 'SEE ALL';
console.log("salam");
fetch("https://restcountries.com/v3.1/all")
        .then((res) => res.json())
        .then((data) => {
                data.forEach((element, i) => {
                        if (i < 3) {
                                const card = document.createElement("div")
                                card.className = "personal-clients-saying__card";
                                card.classList.add('card-1__card_size-one');
                                // card.innerText="salam baku"
                                personal.append(card);

                                // qite p teginde
                                const p = document.createElement("p");
                                card.append(p);
                                let count = element.continents[0];
                                p.append(count);

                                // bayraq
                                const div_img = document.createElement("div");
                                card.append(div_img);
                                const flag = document.createElement("img");
                                flag.src = element.flags.png;
                                div_img.append(flag)
                                flag.style.width = '200px';
                                flag.style.height = '200px';
                                flag.style.borderRadius = '50%';

                                // paytaxt ve olke adi
                                const span = document.createElement("span");
                                const h4 = document.createElement("h4");
                                const p2 = document.createElement("p");
                                let aze = element.name.common;
                                h4.append(aze);
                                span.appendChild(h4)
                                let cap = element.capital;
                                p2.append(cap);
                                span.appendChild(p2);
                                div_img.append(span)
                        }

                });
        })
// personal card country end

// ---------------------------------------------------------------------
// personal forms localStorage started
const full_form = document.querySelector('#full_form');
const email_form = document.querySelector('#email_form');
const city_form = document.getElementById('select_form');
const msj_form = document.querySelector('#msj_form');
const btn_form = document.querySelector('#btn_form');
let arr = [];
if (localStorage.getItem('database') !== null) {
        arr = JSON.parse(localStorage.getItem('database'));
        console.log('lokaldaki arr: ', arr);
} else {
        // console.log("NULL");
}
full_form.addEventListener('submit', function (e) {

        let human = {
                human_email: "",
                human_city: "",
                human_msj: "",
        };
        human.human_email = email_form.value;
        human.human_city = city_form.value;
        human.human_msj = msj_form.value;
        arr.push(human);
        localStorage.setItem('database: ', JSON.stringify(arr));
        e.preventDefault();//refresh olmasin
        console.log("human: ", human);

})
// personal forms localStorage end
// -------------------------------------------------------------------------
// accardion started
const accordion = document.querySelector(".accordion");
const panel= document.querySelectorAll(".acardion");
console.log(panel)
// accordion.addEventListener('click', function() {
//         for(let i=0;i<panel.length;i++){
//         if (panel.style.display === "block") {
//           panel.style.display = "none";
//         } else {
//           panel.style.display = "block";
//         }
// }
//       });
panel.forEach(div=>{
        div.addEventListener("click",function(){
                console.log("salam")
        })
})





// accarion end






// ----------------------------------------------------------------
// const m = document.getElementById('btn');
// const big = document.querySelector('.personal-faq-card-big');
// const mini = document.querySelector('.personal-faq-card-mini');
// const card = document.querySelector('.personal-faq-card');
// console.log(m)
// m.addEventListener('click', function(e) {
//   e.target.parentElement.parentElement.parentElement.style.display = 'block'
// console.log(e.target)
//   for (let i = 0; i < card.children.length; i++) {
//     // card.children[i].style.display = 'none';
//     console.log(card.children[i])
//   }

//   // if (mini.style.display === 'none') {
//   //   big.style.display = 'block';
//   // } else {
//   //   big.style.display = 'none';
//   // }
// });