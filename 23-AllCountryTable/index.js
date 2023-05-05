const tab = document.querySelector('.tab');

fetch("https://restcountries.com/v3.1/all")
        .then((res) => res.json())
        .then((data) => {
                data.forEach((element, i) => {
                        const tab = document.querySelector('.tab');
                        const ter = document.createElement('tr');
                        const num = document.createElement('td');
                        const name = document.createElement('td');
                        const capital = document.createElement('td');
                        const pub = document.createElement('td');
                        const flag_dt = document.createElement('td');
                        const photo = document.createElement("img");
                        const edit = document.createElement("td");
                        const delet = document.createElement("td");
                        flag_dt.append(photo);
                        // table daxiline tr elavesi
                        tab.append(ter);
                        // sira
                        ter.append(num);

                        num.append(i + 1);
                        //        name
                        ter.append(name);
                        com = element.name.common;
                        name.append(com);
                        // capital paytaxt
                        ter.append(capital);
                        let cap = element.capital;
                        capital.append(cap)
                        // ehali sayi
                        ter.append(pub);
                        let public_count = element.population;
                        pub.append(public_count)
                        // flag bayrag
                        ter.append(flag_dt);
                        photo.src = element.flags.png;
                        photo.style.width = '130px';
                        photo.style.height = '70px';
                        photo.style.borderRadius = '20px';

                        // buttonlar edit ve delete
                        const but_delet = document.createElement('button')
                        but_delet.innerText = 'Delete';
                        const but_edit = document.createElement('button')
                        but_edit.innerText = 'Edit';
                        flag_dt.append(but_edit, but_delet);

                        but_delet.addEventListener('click', function () {
                                ter.remove();
                                updateRowNumbers();

                        })
                });
        });

// fetch(`https://restcountries.com/v3.1/all/`)
        // .then((res) => res.json())
        // .then((data) => { data.forEach((element, i) => {
        //     const tr = document.createElement("tr");
        //     const number = document.createElement("td");
        //     const name = document.createElement("td");
        //     const capital = document.createElement("td");
        //     const population = document.createElement("td");
        //     const flag = document.createElement("td");
        //     const img = document.createElement("img");
        //     const edit = document.createElement("td");
        //     const edit_button = document.createElement("button");
        //     const delet = document.createElement("td");
        //     const delete_button = document.createElement("button");
        //     delete_button.textContent = "Delete";
        //     delete_button.addEventListener("click", () => {
        //       tr.remove();
        //       updateRowNumbers();
        //     });
        //     delet.append(delete_button);
        //     edit_button.textContent = "Edit";
        //     edit.append(edit_button);
        //     img.setAttribute("src", element.flags.png);
        //     flag.append(img);
        //     name.textContent = element.name.common;
        //     capital.textContent = element.capital || "";
        //     population.textContent = element.population || "";
        //     number.textContent = i+1 ;
        //     tr.append(number, name, capital, population, flag, edit, delet);
        //     table.appendChild(tr);
        // });
        // });
        // function updateRowNumbers() {
        //   const rows = table.querySelectorAll("tr");
        //   rows.forEach((row, index) => {
        //     row.querySelector("td:first-child").textContent = index ;
        //   });
        // }
// ----------------------------------------------------
// const table = document.getElementById("table");
// console.log(table);

// fetch(`https://restcountries.com/v3.1/all/`)
//   .then((res) => res.json())
//   .then((data) => {
//     data.forEach((element, i) => {
//       console.log(i);
//       let tr = document.createElement("tr");
//       let number = document.createElement("td");
//       let name = document.createElement("td");
//       let capital = document.createElement("td");
//       let population = document.createElement("td");
//       let flag = document.createElement("td");
//       let img = document.createElement("img");
//       let edit = document.createElement("td");
//       let edit_button = document.createElement("button");
//       let delet = document.createElement("td");
//       let delete_button = document.createElement("button");
//       delete_button.innerHTML = "Delete";
//       delet.append(delete_button);
//       edit_button.innerHTML = "Edit";
//       edit.append(edit_button);
//       img.setAttribute("src", element.flags.png);
//       flag.append(img);
//       number.innerHTML = i + 1;
//       name.innerHTML = element.name.common;
//       capital.innerHTML = element.capital;
//       population.innerHTML = element.population;
//       tr.append(number, name, capital, population, flag, edit, delet);
//       table.appendChild(tr);
//       delet.addEventListener("click", () => {
//                 tr.remove();
//       });
//     });
//   });
// fetch(`https://restcountries.com/v3.1/all/`)
// .then((res) => res.json())
// .then((data) => { data.forEach((element, i) => {
//     const tr = document.createElement("tr");
//     const number = document.createElement("td");
//     const name = document.createElement("td");
//     const capital = document.createElement("td");
//     const population = document.createElement("td");
//     const flag = document.createElement("td");
//     const img = document.createElement("img");
//     const edit = document.createElement("td");
//     const edit_button = document.createElement("button");
//     const delet = document.createElement("td");
//     const delete_button = document.createElement("button");
//     delete_button.textContent = "Delete";
//     delete_button.addEventListener("click", () => {
//       tr.remove();
//       updateRowNumbers();
//     });
//     delet.append(delete_button);
//     edit_button.textContent = "Edit";
//     edit.append(edit_button);
//     img.setAttribute("src", element.flags.png);
//     flag.append(img);
//     name.textContent = element.name.common;
//     capital.textContent = element.capital || "";
//     population.textContent = element.population || "";
//     number.textContent = i+1 ;
//     tr.append(number, name, capital, population, flag, edit, delet);
//     table.appendChild(tr);
// });
// });
// function updateRowNumbers() {
//   const rows = table.querySelectorAll("tr");
//   rows.forEach((row, index) => {
//     row.querySelector("td:first-child").textContent = index ;
//   });
// }
// ------------------------------------------------------------
// all.addEventListener('click', function () {
//         fetch("https://restcountries.com/v3.1/all")
//                 .then((res) => res.json())
//                 .then((data) => {
//                         data.forEach((element) => {
//                                 // QITƏ
//                                 let card = document.createElement('div')//esas div
//                                 card.classList.add('card');
//                                 full.appendChild(card);
//                                 console.log(full)


//                                 let card_img = document.createElement('div')//olke qitesi bayragi ve adi olan div
//                                 card_img.classList.add('card_img');
//                                 card.append(card_img)
//                                 const country = document.createElement("h2");
//                                 let count = element.continents[0];
//                                 country.append(count);
//                                 card_img.appendChild(country);
//                                 // BAYRAQ
//                                 const flag = document.createElement("img");
//                                 flag.src = element.flags.png;
//                                 flag.style.width='300px';
//                                 flag.style.height='200px';
//                                 flag.style.borderRadius='20px';
//                                 card_img.appendChild(flag);
//                                 // OLKE ADI
//                                 const name = document.createElement("h2");
//                                 let aze = element.name.common;
//                                 name.append(aze);
//                                 card_img.appendChild(name)


//                                 let info = document.createElement('div')//melumatlar adi olan div
//                                 card.append(info);
//                                 info.classList.add('info');
//                                 //car_one
//                                 let card_one = document.createElement('div');
//                                 card_one.classList.add('card-one');
//                                 let capit = document.createElement('h3');
//                                 capit.innerText = 'Capital';
//                                 let curren = document.createElement('h3');
//                                 curren.innerText = 'Currency';
//                                 let car = document.createElement('h3');
//                                 car.innerText = 'Car series';
//                                 let papul = document.createElement('h3')
//                                 papul.innerText = 'Papulation';
//                                 let dial = document.createElement('h3')
//                                 dial.innerText = 'Dialling';
//                                 card_one.append(capit, curren, car, papul, dial);
//                                 card_one.append();
//                                 info.append(card_one);
//                                 // card_two
//                                 let card_two = document.createElement('div')
//                                 card_two.classList.add('card_two');
//                                 info.append(card_two);

//                                 // PAYTAXT
//                                 const capital = document.createElement("h3");
//                                 let cap = element.capital;
//                                 capital.append(cap)
//                                 card_two.appendChild(capital)
//                                 // VALUTA

//                                 const valuta = document.createElement("h3");
//                                 let valuta_name = Object.keys(element.currencies); //menasi nedir
//                                 valuta.append(valuta_name);
//                                 card_two.appendChild(valuta)

//                                 // MASİN NOMRE SERİASİ
//                                 const avto = document.createElement("h3");
//                                 let avto_num = element.cca2;
//                                 avto.append(avto_num); //niye ppendchild olmur?
//                                 card_two.appendChild(avto);
//                                 // EHALI SAYI
//                                 const public = document.createElement("h3");
//                                 let public_count = element.population;
//                                 public.append(public_count);
//                                 card_two.appendChild(public);
//                                 // TELEFON CODU
//                                 const tel = document.createElement("h3");
//                                 let tel_code_one = element.idd.root;
//                                 let tel_code_two = element.idd.suffixes[0];
//                                 tel.append(tel_code_one, tel_code_two)
//                                 card_two.appendChild(tel)
//                         });

//                 });
// })