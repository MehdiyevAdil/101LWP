// Agency country card IP started
//movcud cardlarin elani 
const cards = document.querySelector('.cards');
fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => {
        data.forEach((element, i) => {
            if (i < 3) {
                // divler yaradilir ve classlari menimsedilir
                const cardOne = document.createElement('div');
                cardOne.className = 'card-one';
                const cardContainer = document.createElement('div');
                cardContainer.className = 'card-container';
                const cardOnePart_1 = document.createElement('div');
                cardOnePart_1.className = 'card-one_part1'
                const cardOnePart_2 = document.createElement('div');
                cardOnePart_2.className = 'card-one_part2'
                const cardOnePart_3 = document.createElement('div');
                cardOnePart_3.className = 'card-one_part3'
                // divler bir-birinin daxiline append edilir
                cards.append(cardOne);
                cardOne.append(cardContainer);
                cardContainer.append(cardOnePart_1, cardOnePart_2, cardOnePart_3);
                console.log(cardContainer)
                // tegler yaradilir ve  IP-den gelen melumatlar deyisene menimsedilir deyisenlerde yaradilan uygun teglere menimsedilir
                const h1 = document.createElement('h1');
                let common = element.name.common;
                cardOnePart_1.append(h1);
                h1.append(common);

                const h4 = document.createElement('h4');
                // let valuta_name = Object.keys(element.currencies)[0];
                let smallName = element.cca3;
                h4.append.smallName;
                cardOnePart_1.append(h4);
                console.log(h4);

                const flag = document.createElement("img");
                flag.src = element.flags.png;
                cardOnePart_2.append(flag)
                flag.style.width = '200px';
                flag.style.height = '150px';
                flag.style.borderRadius = '20%';

                const areaSpan = document.createElement('span');
                let area = element.area;
                areaSpan.append(area);
                // areaSpan.innerHTML = "population: ";
                cardOnePart_2.append(areaSpan)
                const capitalTags = document.createElement('h4');
                let capital = element.capital[0];
                capitalTags.append(capital);
                cardOnePart_3.append(capitalTags);



            }
        });
    })
        

