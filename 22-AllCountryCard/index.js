const search_input = document.querySelector('.search');
const getbtn = document.querySelector('.count');
const all = document.querySelector('.all');
const border = document.querySelector('.border');


let full = document.querySelector('.full');
getbtn.addEventListener('click', function () {
        console.log(search_input.value)
        fetch("https://restcountries.com/v3.1/name/" + search_input.value)
                .then(res => res.json())
                .then(data => {



                        // QITƏ
                        let card = document.createElement('div')//esas div
                        card.classList.add('card');
                        full.appendChild(card);
                        console.log(full)


                        let card_img = document.createElement('div')//olke qitesi bayragi ve adi olan div
                        card_img.classList.add('card_img');
                        card.append(card_img)
                        const country = document.createElement("h2");
                        let count = data[0].continents[0];
                        country.append(count);
                        card_img.appendChild(country);
                        // BAYRAQ
                        const flag = document.createElement("img");
                        flag.src = data[0].flags.png;
                        card_img.appendChild(flag);
                        // OLKE ADI
                        const name = document.createElement("h2");
                        let aze = data[0].name.common;
                        name.append(aze);
                        card_img.appendChild(name)


                        let info = document.createElement('div')//melumatlar adi olan div
                        card.append(info);
                        info.classList.add('info');
                        //car_one
                        let card_one = document.createElement('div');
                                card_one.classList.add('card-one');
                                let capit = document.createElement('h3');
                                capit.innerText = 'Capital';
                                let curren = document.createElement('h3');
                                curren.innerText = 'Currency';
                                let car = document.createElement('h3');
                                car.innerText = 'Car series';
                                let papul = document.createElement('h3')
                                papul.innerText = 'Papulation';
                                let dial = document.createElement('h3')
                                dial.innerText = 'Dialling';
                                card_one.append(capit, curren, car, papul, dial);
                        info.append(card_one);
                        // card_two
                        let card_two = document.createElement('div')
                        card_two.classList.add('card_two');
                        info.append(card_two);



                        // PAYTAXT
                        const capital = document.createElement("h3");
                        let cap = data[0].capital[0];
                        capital.append(cap)
                        card_two.appendChild(capital)
                        // VALUTA

                        const valuta = document.createElement("h3");
                        let valuta_name = Object.keys(data[0].currencies)[0] //.AZN.name;
                        // let valuta_symbol = data[0].currencies.AZN.symbol;
                        valuta.append(valuta_name);
                        card_two.appendChild(valuta)

                        // MASİN NOMRE SERİASİ
                        const avto = document.createElement("h3");
                        let avto_num = data[0].cca2;
                        avto.append(avto_num); //niye ppendchild olmur?
                        card_two.appendChild(avto);
                        // EHALI SAYI
                        const public = document.createElement("h3");
                        let public_count = data[0].population;
                        public.append(public_count);
                        card_two.appendChild(public);
                        // TELEFON CODU
                        const tel = document.createElement("h3");
                        let tel_code_one = data[0].idd.root;
                        let tel_code_two = data[0].idd.suffixes[0];
                        tel.append(tel_code_one, tel_code_two)
                        card_two.appendChild(tel)

                });
});



all.addEventListener('click', function () {
        fetch("https://restcountries.com/v3.1/all")
                .then((res) => res.json())
                .then((data) => {
                        data.forEach((element) => {
                                // QITƏ
                                let card = document.createElement('div')//esas div
                                card.classList.add('card');
                                full.appendChild(card);
                                console.log(full)


                                let card_img = document.createElement('div')//olke qitesi bayragi ve adi olan div
                                card_img.classList.add('card_img');
                                card.append(card_img)
                                const country = document.createElement("h2");
                                let count = element.continents[0];
                                country.append(count);
                                card_img.appendChild(country);
                                // BAYRAQ
                                const flag = document.createElement("img");
                                flag.src = element.flags.png;
                                flag.style.width='300px';
                                flag.style.height='200px';
                                flag.style.borderRadius='20px';
                                card_img.appendChild(flag);
                                // OLKE ADI
                                const name = document.createElement("h2");
                                let aze = element.name.common;
                                name.append(aze);
                                card_img.appendChild(name)


                                let info = document.createElement('div')//melumatlar adi olan div
                                card.append(info);
                                info.classList.add('info');
                                //car_one
                                let card_one = document.createElement('div');
                                card_one.classList.add('card-one');
                                let capit = document.createElement('h3');
                                capit.innerText = 'Capital';
                                let curren = document.createElement('h3');
                                curren.innerText = 'Currency';
                                let car = document.createElement('h3');
                                car.innerText = 'Car series';
                                let papul = document.createElement('h3')
                                papul.innerText = 'Papulation';
                                let dial = document.createElement('h3')
                                dial.innerText = 'Dialling';
                                card_one.append(capit, curren, car, papul, dial);
                                card_one.append();
                                info.append(card_one);
                                // card_two
                                let card_two = document.createElement('div')
                                card_two.classList.add('card_two');
                                info.append(card_two);

                                // PAYTAXT
                                const capital = document.createElement("h3");
                                let cap = element.capital;
                                capital.append(cap)
                                card_two.appendChild(capital)
                                // VALUTA

                                const valuta = document.createElement("h3");
                                let valuta_name = Object.keys(element.currencies); //menasi nedir
                                valuta.append(valuta_name);
                                card_two.appendChild(valuta)

                                // MASİN NOMRE SERİASİ
                                const avto = document.createElement("h3");
                                let avto_num = element.cca2;
                                avto.append(avto_num); //niye ppendchild olmur?
                                card_two.appendChild(avto);
                                // EHALI SAYI
                                const public = document.createElement("h3");
                                let public_count = element.population;
                                public.append(public_count);
                                card_two.appendChild(public);
                                // TELEFON CODU
                                const tel = document.createElement("h3");
                                let tel_code_one = element.idd.root;
                                let tel_code_two = element.idd.suffixes[0];
                                tel.append(tel_code_one, tel_code_two)
                                card_two.appendChild(tel)
                        });

                });
})

border.addEventListener('click', function () {
        let bor = [];
        fetch("https://restcountries.com/v3.1/name" + search_input.value)
                .then((res) => res.json())
                .then((data) => {
                        data.forEach((element) => {
                                // QITƏ
                                let card = document.createElement('div')//esas div
                                card.classList.add('card');
                                full.appendChild(card);
                                console.log(full)


                                let card_img = document.createElement('div')//olke qitesi bayragi ve adi olan div
                                card_img.classList.add('card_img');
                                card.append(card_img)
                                const country = document.createElement("h2");
                                let count = element.continents[0];
                                country.append(count);
                                card_img.appendChild(country);
                                // BAYRAQ
                                const flag = document.createElement("img");
                                flag.src = element.flags.png;
                                card_img.appendChild(flag);
                                // OLKE ADI
                                const name = document.createElement("h2");
                                let aze = element.name.common;
                                name.append(aze);
                                card_img.appendChild(name)


                                let info = document.createElement('div')//melumatlar adi olan div
                                card.append(info);
                                info.classList.add('info');
                                //car_one
                                let card_one = document.createElement('div');
                                card_one.classList.add('card-one');
                                let h3_1 = document.createElement('h3').innerHTML = 'Capital';
                                let h3_2 = document.createElement('h3').innerHTML = 'Currency';
                                let h3_3 = document.createElement('h3').innerHTML = 'Car series';
                                let h3_4 = document.createElement('h3').innerHTML = 'Papulation';
                                let h3_5 = document.createElement('h3').innerHTML = 'Dialling';
                                card_one.append(h3_1, h3_2, h3_3, h3_4, h3_5);
                                info.append(card_one);
                                // card_two
                                let card_two = document.createElement('div')
                                card_two.classList.add('card_two');
                                info.append(card_two);

                                // PAYTAXT
                                const capital = document.createElement("h3");
                                let cap = element.capital[0];
                                capital.append(cap)
                                card_two.appendChild(capital)
                                // VALUTA

                                const valuta = document.createElement("h3");
                                let valuta_name = Object.keys(element.currencies)[0] //menasi nedir
                                valuta.append(valuta_name);
                                card_two.appendChild(valuta)

                                // MASİN NOMRE SERİASİ
                                const avto = document.createElement("h3");
                                let avto_num = element.cca2;
                                avto.append(avto_num); //niye ppendchild olmur?
                                card_two.appendChild(avto);
                                // EHALI SAYI
                                const public = document.createElement("h3");
                                let public_count = element.population;
                                public.append(public_count);
                                card_two.appendChild(public);
                                // TELEFON CODU
                                const tel = document.createElement("h3");
                                let tel_code_one = element.idd.root;
                                let tel_code_two = element.idd.suffixes[0];
                                tel.append(tel_code_one, tel_code_two)
                                card_two.appendChild(tel)
                        });

                });
})