//images startr
const main_box_colors__blue = document.getElementById('main_box_colors__blue');
const main_box_colors__red = document.getElementById('main_box_colors__red');
const main__Box1 = document.getElementById('main__Box1');
const main_Box1__img3 = document.getElementById("main_Box1__img3");
const main_Box1__img2 = document.getElementById("main_Box1__img2");
const main_Box2__Price = document.getElementById('main_Box2__Price');

main_box_colors__blue.addEventListener('click', function () {
        main__Box1.classList.add("change");
        main_Box2__Price = main_Box2__Price.style.backgroundColor = "#b40020";
        main_Box2__Price = main_Box2__Price.innerText = 'USD 350,00';
});

main_box_colors__red.addEventListener("click", function () {
        main__Box1.classList.remove("change");
        main_Box2__Price = main_Box2__Price.style.backgroundColor = "#ecb721";
});
//images end

// sizes start
let main_Box2__Buttons = document.getElementById('main_Box2__Buttons');
for (let i = 0; i < main_Box2__Buttons.children.length; i++) {
        main_Box2__Buttons.children[i].addEventListener("click", function () {
                for (let j = 0; j < main_Box2__Buttons.children.length; j++) {
                        main_Box2__Buttons.children[j].style.cssText = "";
                }
                main_Box2__Buttons.children[i].style.cssText = `
              width: 2rem;
              height: 2rem;
              background-color: #25d393;
              color: #fff;
              border-radius: 50%;
              display: grid;
              place-items: center;
            `;
        });
}
//       sizes end

//       stars start
const main_Box__Stars = document.getElementById('main_Box__Stars').children;
//1ci merhele => ratingi saxlamaq ucun deyishen elan edirik
let point = 0;
addClickListeners();

//2ci merhele => ratingin deyerini deyishirik
function addClickListeners() {
        for (let i = 0; i < main_Box__Stars.length; i++) {
                main_Box__Stars[i].addEventListener('click', () => {
                        if (point !== i + 1) {
                                point = i + 1;
                                renderStars()
                        }
                })
        }
}
//3cu merhele => Secilmish ratinge gore ulduzlari gosteririk
function renderStars() {
        for (let i = 0; i < main_Box__Stars.length; i++) {
                if (i + 1 <= point) {
                        if (!main_Box__Stars[i].classList.contains('star-filled'))
                                main_Box__Stars[i].classList.add('star-filled');
                } else {
                        main_Box__Stars[i].classList.remove('star-filled');
                }
        }
}