// 3 rəqəmli hər hansı bir ədəd verilib. 
// Həmin ədədin hansı rəqəmlərdən ibarət olduğunu bizə qaytaran bir proqram tərtib edin.
//  Məsələn: number=652 daxil etdikdə  cavab bu şəkildə olmalıdır:

a = +prompt("ededi daxil edin:");
let a1, a2, a3;//325
if (a < 99 || a > 999) {
    console.log("3 reqemli eded daxil edin")
} else {
    a1 = a / 100;//3
    a2 = (a / 10)%10//
    a3 = a % 10;

    console.log(parseInt(a1), " ", parseInt(a2), " ", parseInt(a3));
}

// IKINCI USUL ------  Math.floor()

// a = +prompt("ededi daxil edin:");
// let a1, a2, a3;//325
// if (parseInt(a) < 99 || parseInt(a) > 999) {
//     console.log("3 reqemli eded daxil edin")
// } else {
//     a1 = Math.floor(a / 100);
//     a2 = Math.floor(a / 10) % 10;
//     a3 = a % 10;
//     console.log(a1, " ", a2, " ", a3);
// }
