
const table = document.querySelector('#projectTable');
fetch("https://northwind.vercel.app/api/customers")
  .then((res) => res.json())
  .then((data) => {
    data.forEach((element, i) => {
      const rows = document.createElement('tr');
      table.append(rows);
      rows.className = 'rows';
      let row_0 = document.createElement('td');
      rows.appendChild(row_0);
      let idElement = element.id;
      row_0.append(idElement);
      // company
      let row_1 = document.createElement('td');
      rows.appendChild(row_1);
      let company = element.companyName;
      row_1.append(company);
      // contactname
      let row_2 = document.createElement('td');
      rows.append(row_2);
      let contact = element.contactName;
      row_2.append(contact);
      // city
      let row_3 = document.createElement('td');
      rows.append(row_3);
      let city = element.address.city;
      row_3.append(city);
      //country
      let row_4 = document.createElement('td');
      rows.append(row_4);
      let country = element.address.country;
      row_4.append(country);
      // phone
      let row_5 = document.createElement('td');
      rows.append(row_5);
      let phone = element.address.phone;
      row_5.append(phone);
      // info buttonu
      const info = document.createElement('td');
      const info_btn = document.createElement('a');
      info_btn.style.display = 'block';
      info_btn.innerText = "INFO";
      info_btn.target = "_blank";
      info_btn.href = "cardInfo.html";
      info_btn.className = "info_btn";
      info.append(info_btn);
      rows.append(info);

    });
  })

const full = document.querySelector('.full');
fetch("https://northwind.vercel.app/api/customers")
  .then((res) => res.json())
  .then((data) => {
    data.forEach((element) => {
      const card = document.createElement('div');
      const cardOne = document.createElement('div');
      cardOne.className = "cardOne";
      card.className = "card";
      card.append(cardOne)
      full.append(card);
      const p1 = document.createElement('p');
      p1.innerText = "ID";
      let id = element.id;
      p1.append(id);
      cardOne.append(p1);
      const p2 = document.createElement('p');
      let name = element.companyName;
      p2.append(name);
      cardOne.append(p2);
      console.log(cardOne);

      const p3 = document.createElement('p');
      let contact = element.contactName;
      p3.append(contact);
      cardOne.append(p3);
      console.log(cardOne);

      const p4 = document.createElement('p');
      let street = element.address.street;
      p4.append(street);
      cardOne.append(p4);
      console.log(cardOne);

      const p5 = document.createElement('p');
      let city = element.address.city;
      p5.append(city);
      cardOne.append(p5);
      console.log(cardOne);

      const p6 = document.createElement('p');
      let region = element.address.region;
      p6.append(region);
      cardOne.append(p6);
      console.log(cardOne);

      const p7 = document.createElement('p');
      let postalCode = element.address.postalCode;
      p7.append(postalCode);
      cardOne.append(p7);
      console.log(cardOne);

      const p8 = document.createElement('p');
      let country = element.address.country;
      p8.append(country);
      cardOne.append(p8);
      console.log(cardOne);

      const p9 = document.createElement('p');
      let phone = element.address.phone;
      p9.append(phone);
      cardOne.append(p9);
      console.log(cardOne);

    });

  });

// let a=fetch("https://northwind.vercel.app/api/customers?fields=id")
//   .then((res) => res.json())
//   .then((data) => {
//     data.forEach((customer)=>{
//       console.log("id:",customer.id)
//     });
//   });
// ----------------------------------------------

