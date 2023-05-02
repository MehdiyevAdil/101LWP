fetch("https://restcountries.com/v3.1/name/azerbaijan")
        .then(res => res.json())
        .then(data => {

                // for(let i=0;i<data.length;i++){
                        
                // QITƏ
                const card = document.querySelector(".card_img")
                const country = document.createElement("h2");
                let count = data[0].continents[0];
                country.append(count);
                card.appendChild(country);
                // BAYRAQ
                const flag = document.createElement("img");
                flag.src = data[0].flags.png;
                card.appendChild(flag);
                // OLKE ADI
                const name = document.createElement("h2");
                let aze = data[0].name.common;
                name.append(aze);
                card.appendChild(name)


                const info = document.querySelector(".card-two");
                // PAYTAXT
                const capital = document.createElement("h3");
                let cap = data[0].capital[0];
                capital.append(cap)
                info.appendChild(capital)
                // VALUTA

                const valuta = document.createElement("h3");
                let valuta_name = data[0].currencies.AZN.name;
                let valuta_symbol = data[0].currencies.AZN.symbol;
                valuta.append(valuta_name," ",valuta_symbol);
                info.appendChild(valuta)

                // MASİN NOMRE SERİASİ
                const avto = document.createElement("h3");
                let avto_num = data[0].cca2;
                avto.append(avto_num); //niye ppendchild olmur?
                info.appendChild(avto);
                // EHALI SAYI
                const public = document.createElement("h3");
                let public_count = data[0].population;
                public.append(public_count);
                info.appendChild(public);
                // TELEFON CODU
                const tel = document.createElement("h3");
                let tel_code_one = data[0].idd.root;
                let tel_code_two = data[0].idd.suffixes[0];
                tel.append(tel_code_one, tel_code_two)
                info.appendChild(tel)

        });

        fetch("https://restcountries.com/v3.1/name/italy")
        .then(res => res.json())
        .then(data => {

                // for(let i=0;i<data.length;i++){
                        
                // QITƏ
                const card = document.getElementById("italy_flag")
                const country = document.createElement("h2");
                let count = data[0].continents[0];
                country.append(count);
                card.appendChild(country);
                // BAYRAQ
                const flag = document.createElement("img");
                flag.src = data[0].flags.png;
                card.appendChild(flag);
                // OLKE ADI
                const name = document.createElement("h2");
                let aze = data[0].name.common;
                name.append(aze);
                card.appendChild(name)


                const info = document.getElementById("italy_text");
                // PAYTAXT
                const capital = document.createElement("h3");
                let cap = data[0].capital[0];
                capital.append(cap)
                info.appendChild(capital)
                // VALUTA

                const valuta = document.createElement("h3");
                let valuta_name = data[0].currencies.EUR.name;
                let valuta_symbol = data[0].currencies.EUR.symbol;
                valuta.append(valuta_name," ",valuta_symbol);
                info.appendChild(valuta)

                // MASİN NOMRE SERİASİ
                const avto = document.createElement("h3");
                let avto_num = data[0].cca2;
                avto.append(avto_num); //niye ppendchild olmur?
                info.appendChild(avto);
                // EHALI SAYI
                const public = document.createElement("h3");
                let public_count = data[0].population;
                public.append(public_count);
                info.appendChild(public);
                // TELEFON CODU
                const tel = document.createElement("h3");
                let tel_code_one = data[0].idd.root;
                let tel_code_two = data[0].idd.suffixes[0];
                tel.append(tel_code_one, tel_code_two)
                info.appendChild(tel)
        });

        fetch("https://restcountries.com/v3.1/name/japan")
        .then(res => res.json())
        .then(data => {

                // for(let i=0;i<data.length;i++){
                        
                // QITƏ
                const card = document.querySelector("#japan-flag")
                const country = document.createElement("h2");
                let count = data[0].continents[0];
                country.append(count);
                card.appendChild(country);
                // BAYRAQ
                const flag = document.createElement("img");
                flag.src = data[0].flags.png;
                card.appendChild(flag);
                // OLKE ADI
                const name = document.createElement("h2");
                let aze = data[0].name.common;
                name.append(aze);
                card.appendChild(name)


                const info = document.querySelector("#japan-text");
                // PAYTAXT
                const capital = document.createElement("h3");
                let cap = data[0].capital[0];
                capital.append(cap)
                info.appendChild(capital)
                // VALUTA

                const valuta = document.createElement("h3");
                let valuta_name = data[0].currencies.JPY.name;
                let valuta_symbol = data[0].currencies.JPY.symbol;
                valuta.append(valuta_name," ",valuta_symbol);
                info.appendChild(valuta)

                // MASİN NOMRE SERİASİ
                const avto = document.createElement("h3");
                let avto_num = data[0].cca2;
                avto.append(avto_num); //niye ppendchild olmur?
                info.appendChild(avto);
                // EHALI SAYI
                const public = document.createElement("h3");
                let public_count = data[0].population;
                public.append(public_count);
                info.appendChild(public);
                // TELEFON CODU
                const tel = document.createElement("h3");
                let tel_code_one = data[0].idd.root;
                let tel_code_two = data[0].idd.suffixes[0];
                tel.append(tel_code_one, tel_code_two)
                info.appendChild(tel)

        });
        
        
        fetch("https://restcountries.com/v3.1/name/United Kingdom")
        .then(res => res.json())
        .then(data => {

                // for(let i=0;i<data.length;i++){
                        
                // QITƏ
                const card = document.querySelector("#flag")
                const country = document.createElement("h2");
                let count = data[0].continents[0];
                country.append(count);
                card.appendChild(country);
                // BAYRAQ
                const flag = document.createElement("img");
                flag.src = data[0].flags.png;
                card.appendChild(flag);
                // OLKE ADI
                const name = document.createElement("h2");
                let aze = data[0].name.common;
                name.append(aze);
                card.appendChild(name)


                const info = document.querySelector("#text");
                // PAYTAXT
                const capital = document.createElement("h3");
                let cap = data[0].capital[0];
                capital.append(cap)
                info.appendChild(capital)
                // VALUTA

                const valuta = document.createElement("h3");
                let valuta_name = data[0].currencies.GBP.name;
                let valuta_symbol = data[0].currencies.GBP.symbol;
                valuta.append(valuta_name," ",valuta_symbol);
                info.appendChild(valuta)

                // MASİN NOMRE SERİASİ
                const avto = document.createElement("h3");
                let avto_num = data[0].cca2;
                avto.append(avto_num); //niye ppendchild olmur?
                info.appendChild(avto);
                // EHALI SAYI
                const public = document.createElement("h3");
                let public_count = data[0].population;
                public.append(public_count);
                info.appendChild(public);
                // TELEFON CODU
                const tel = document.createElement("h3");
                let tel_code_one = data[0].idd.root;
                let tel_code_two = data[0].idd.suffixes[0];
                tel.append(tel_code_one, tel_code_two)
                info.appendChild(tel)

        });
        
