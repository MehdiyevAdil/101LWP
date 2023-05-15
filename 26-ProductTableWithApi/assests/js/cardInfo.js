const apiBaseUrl = 'https://northwind.vercel.app/api/customers';

function fetchCustomer(id) {
    return fetch(apiBaseUrl + '/' + id)
          .then(res => res.json());
}

function getCustomerIdFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('customerId');
}

function generateCustomerCard(customerData) {
    console.log("CUSTOMER DATA: ", customerData);
    const customerCard = document.getElementById('customerCard');

    customerCard.innerHTML = `
        <p>ID: ${customerData.id} </p>
        <p>contactTitle: ${customerData.contactTitle} </p>
        <p>contactName: ${customerData.contactName} </p>
        <p>companyName: ${customerData.companyName} </p>
        <p>Street: ${customerData.address.street} </p>
        <p>City: ${customerData.address.city} </p>
        <p>Region: ${customerData.address.region} </p>
        <p>PostalCode: ${customerData.address.postalCode} </p>
        <p>Coutry: ${customerData.address.coutry} </p>
        <p>Phone: ${customerData.address.phone} </p>
        

    `
}

const customerId = getCustomerIdFromUrl();
console.log("CUSTOMER ID: ", customerId);

fetchCustomer(customerId).then(customerData => {
    generateCustomerCard(customerData)
})


// const full=document.querySelector('.full');
// fetch("https://northwind.vercel.app/api/customers")
// .then((res) => res.json())
// .then((data) => {
//         data.forEach((element) => {
//           const card=document.createElement('div');
//           const cardOne=document.createElement('div');
//           cardOne.className="cardOne";
//           card.className="card";
//           card.append(cardOne)
//           full.append(card);
//           const p1=document.createElement('p');
//           p1.innerText="ID";
//           let id=element.id;
//           p1.append(id);
//           cardOne.append(p1);
//           const p2=document.createElement('p');
//           let name=element.companyName;
//           p2.append(name);
//           cardOne.append(p2);
//           console.log(cardOne);

//           const p3=document.createElement('p');
//           let contact=element.contactName;
//           p3.append(contact);
//           cardOne.append(p3);
//           console.log(cardOne);

//           const p4=document.createElement('p');
//           let street=element.address.street;
//           p4.append(street);
//           cardOne.append(p4);
//           console.log(cardOne);

//           const p5=document.createElement('p');
//           let city=element.address.city;
//           p5.append(city);
//           cardOne.append(p5);
//           console.log(cardOne);

//           const p6=document.createElement('p');
//           let region=element.address.region;
//           p6.append(region);
//           cardOne.append(p6);
//           console.log(cardOne);

//           const p7=document.createElement('p');
//           let postalCode=element.address.postalCode;
//           p7.append(postalCode);
//           cardOne.append(p7);
//           console.log(cardOne);

//           const p8=document.createElement('p');
//           let country=element.address.country;
//           p8.append(country);
//           cardOne.append(p8);
//           console.log(cardOne);

//           const p9=document.createElement('p');
//           let phone=element.address.phone;
//           p9.append(phone);
//           cardOne.append(p9);
//           console.log(cardOne);

//         });

// });