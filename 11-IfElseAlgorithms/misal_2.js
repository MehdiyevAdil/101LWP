//3 ədəd verilib. Bu ədədlərin birləşməsindən yaranan ən böyük və ən kiçik 3 rəqəmli ədədi tapan proqram tərtib edin. 
//Proqramın qaytardığı cavab number tipində olmalıdır. 
// Yəni ki, aldığımız cavabı başqa bir ədədlə toplaya, çıxa və s. edə bilərik. 

let a = +prompt("a-ni daxil edin");
let b = +prompt("b-ni daxil edin");
let c = +prompt("c-ni daxil edin");
if (a > b > c) {
    console.log("Boyuk sira: ", a * 100 + b * 10 + c);
    console.log("Kicik sira: ", c + b * 10 + a * 100);

} else if (a > c > b) {
    console.log("Boyuk sira: ", a * 100 + c * 10 + b);
    console.log("Kicik sira: ", b + c * 10 + a * 100);
} else if (b > a > c) {
    console.log("Boyuk sira: ", b * 100 + a * 10 + c);
    console.log("Kicik sira: ", c + a * 10 + b * 100);

} else if (b > c > a) {
    console.log("Boyuk sira: ", b * 100 + c * 10 + a);
    console.log("Kicik sira: ", a + c * 10 + b * 100);
} else if (c > a > b) {
    console.log("Boyuk sira: ", c * 100 + a * 10 + b);
    console.log("Kicik sira: ", b + a * 10 + c * 100);

} else if (c > b > a) {
    console.log("Boyuk sira: ", c * 100 + b * 10 + a);
    console.log("Kicik sira: ", a + b * 10 + c * 100);

}