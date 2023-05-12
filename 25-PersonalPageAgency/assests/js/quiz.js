// let user={
//     name:'samir',
//     age:28
// };
// const foo=u=>{
//     u.age+=1;
// };
// foo(user);
// console.log(user.age);
// // cavab:29 



// let student=[ 'Ceyhun', 'Aladdin', 'Shahriyar', 'Gunel' ];
// student.splice(1,0, 'Gulara')
// console.log(student);
// cavab: [ 'Ceyhun', 'Gulara', 'Aladdin', 'Shahriyar', 'Gunel' ]
// const foo=()=> console.log("first");
// const bar=()=> setTimeout(()=> console.log('second'));
// const baz=()=> console.log("tird");
// bar()
// foo()
// baz()
// cavab: First Third Second

// let c={greeting:"hey!"};
// let d;
// d=c;
// c.greeting="hello";
// console.log(d.greeting);
// // cavab: hello

// let str="Lorem ipsum dolor sit elit";
// let a=str.toLocaleLowerCase().indexOf('l');
// let b=str.toLocaleLowerCase().lastIndexOf('l');
// console.log(a+b);
// // cavab:23
// function sum(a, b) {
//     return a + b;
// }
// type(sum(1, "2"));

// let arr=[45,10,44,14,13];
// console.log(arr.find((el)=>el%2===0));
// let count=0;
// const nums=[0,1,2,3];
// nums.forEach((num)=>{
//     if(num)count+=1;
// });
// console.log(count);
// // cavab:3

// let container=document.querySelector('.container');
// console.log(container.children[true+true].innerText);
function sum(a,b){
    return a+b;
}
console.log(sum(1,"2"));