// Proqrama daxil edilən məlumatın ədəd və ya  hərf, simvol olduğunu təyin edən proqram tərtib edin. 
// Daxil edilən məlumat yalnız 1 rəqəm, hərf və ya simvol ola bilər. 
// Məsələn: info=6 yazdıqda cavab bu şəkildə olmalıdır:
// Daxil edilən məlumat rəqəmdir.
// Məsələn: info="a" yazdıqda cavab bu şəkildə olmalıdır:
// Daxil edilən məlumat hərf və ya simvoldur.
let a = +prompt("daxil edin");

if (!isNaN(a)) {
    console.log("daxil edilen ededdir:", a);
} else if ( a.constructor === String) {
    console.log("daxil edilen sybol ve ya stringdir: ", a)
} else {
    console.log("Daxil edilen tip ferqlidir.Tipi number ve ya string olan element daxil edin");
}
