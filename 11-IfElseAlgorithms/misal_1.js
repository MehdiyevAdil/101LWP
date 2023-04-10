//                                     Şərt
// 3 ədəd verilib.Bu 3 ədəd içindən cəmləri ən böyük olan 
// 2 ədədi qaytaran proqram tərtib edin.Məsələn: a = 1, b = 2, c = 3 
// daxil etdikdə cavab bu şəkildə olmalıdır: Big sum result 2 and 3

//                                     Izahi 
// max deyiseni elan edib istediyimiz cemi maximal olaraq max deyisenine menimsedirik 
// sade olsun deye a+b_ni goturek.sonra sert operatoru ile max deyiseninden boyuk cem olub
// olmamasini yoxlayaq varsa max_in deyeri deyisib  hemin ceme beraber olsun ekis alda maxin ilkin
// deyeri ile yeni (a+b)_ile capa verilsin

let a = +prompt("a-ni daxil edin");
let b = +prompt("b-ni daxil edin");
let c = +prompt("c-ni daxil edin");
let max = a + b;

if (max > (a + c) && max > (b + c)) {
    console.log("Cavab: a+b= ", max);

} else if ((a + c) > max && (a + c) > (b + c)) {
    max = a + c;
    console.log("Cavab:a+c= ", max);

} else if ((b + c) > (a + b) && (b + c) > max) {
    max = b + c;
    console.log("Cavab:b+c= ", max);

} else {
    console.log("erorr");

}
