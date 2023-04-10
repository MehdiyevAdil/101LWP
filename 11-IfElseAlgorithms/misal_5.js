// Düzbucaqlı üçbucağın katetləri və hipotenuzunun uzunluğu verilib. 
// Verilən məlumatlara əsəsən bu üçbucağın düzbucaqlı üçbucaq olub olmadığını yoxlayan proqram tərtib edin.

let x = +prompt("kateti daxil edin:");
let y = +prompt("kateti daxil edin:");
let verilen_hipotenuz = +prompt("hipetenuzun daxil edin:");
let netice_hipotenuz = Math.sqrt(x * x + y * y);

if (verilen_hipotenuz === netice_hipotenuz) {
    console.log("Result: düzbucaqlı üçbucaq")
} else {
    console.log("Result: düzbucaqlı üçbucaq deyil")

}

