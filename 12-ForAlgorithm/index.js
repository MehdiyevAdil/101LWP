
//TEXT:
sampleNews = `As software developers, the natural 
tendency is to start developing applications based on your own hands-on experience and knowledge right away. 
However, overtime issues in the application arise, adaptations to ch-anges, and new features happen.`

// 1) BOSLUQLARIN SAYINI TAPIN
let index = " ";
let say = 0;
for (let i = 0; i < sampleNews.length; i++) {
    if (sampleNews[i] === index) {
        say++;
    }
}
console.log("Bosluqlarin sayi: ", say, "-denedir");

//---------------------------------------------------------------------------------------------------------------

// 2) NOQTE VE VERGULLERIN SAYINI TAPIN
//TEXT:

// let noqte = ".";
// let vergul = ",";
// sayN = 0;
// sayV = 0;
// for (let j = 0; j < sampleNews.length; j++) {
//     if (sampleNews[j] === noqte) {
//         sayN++;
//     }
//     if (sampleNews[i] === vergul) {
//         sayV++;
//     }
   
// }
// console.log("vergul sayi:", sayV, "-ədəd  ", "noqte sayi:", sayN, "-ədəd");


