const names = document.querySelector('.inp_name');
const sur = document.querySelector('.inp_surname');
const age = document.querySelector('.inp_age');
const curs = document.querySelector('.inp_curs');
const male = document.querySelector('.inp_males');
const btn = document.querySelector('.btn');
const forms = document.querySelector('.forms');
const forms2 = document.querySelector('.forms_2');
const sh = document.querySelector('.sh');
console.log(sh);
console.log(forms);


console.log(JSON.parse(localStorage.getItem("arr")));
let arr = [];
if (JSON.parse(localStorage.getItem("arr")) !== null) {
    arr = JSON.parse(localStorage.getItem("arr"));
}

forms.addEventListener('submit', function (e) {
    let student = {
        std_name: "",
        std_surname: "",
        std_age: "",
        std_curs: "",
        // std_male: "",
    };
    student.std_name = names.value;
    student.std_surname = sur.value;
    student.std_age = age.value;
    student.std_curs = curs.value;
    // student.std_male = male.value;
    arr.push(student);
    localStorage.setItem('database: ', JSON.stringify(arr));
    console.log(JSON.parse(localStorage.getItem(arr)));
    e.preventDefault;//refresh olmasin
})
   
//  =============================================================   
// forms2.addEventListener('submit',function(a){
   
//     for (let i = 0; i < localStorage.length; i++) {
//         if (localStorage[i] === sh.value) {
//             alert('axtardiginiz telebe movcutdur');
//         } else {
//             alert('Qeydiyatda bu adda telebe yoxdur')
//         }
//     }
// })

// ===============================================================
// console.log(JSON.parse(localStorage.getItem("arr")));
// let arr=[];
// if(JSON.parse(localStorage.getItem("arr"))===null){
//     arr=[]
// }else{
//     arr=JSON.parse(localStorage.getItem("arr"));
// }

// forms.addEventListener("submit",function(e){
// let human={
//     full_name:"",
//     myMail:""
// }
// human.full_name=named.value;
// human.myMail=mails.value;
// arr.push(human);
// console.log(human)
// localStorage.setItem("arr", JSON.stringify(arr));
// console.log(JSON.parse(localStorage.getItem("arr")));

// e.preventDefault();
// })
