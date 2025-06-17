// let sum = function (sum1, sum2) {
//   return sum1 + sum2;
// };
// console.log(sum(2, 3));
// let sumOfThree = function (num1, num2, num3) {
//   return sum(2, 4) + 8;
// };
// console.log(sumOfThree());

// setTimeout(() => console.log("good morning uday"), 2000);
// console.log("completed");
// setInterval(() => {
//   let i = 1;
//   i++;
//   console.log(i);
// }, 2000);
// let btn =document.querySelector("#my-btn");
// btn.addEventListener("click", () => {
//   console.log("hello");
// });
// btn.addEventListener('mousemove',(event)=>{
//     console.log(event);
    
// })


let foods=['mango','graps','apple','banana'];
foods.forEach(food=> {
   
    if (food==='banana') {
        console.log("banana was found");
        return;//contineu ki trah work karta hai forEach me
    }
    console.log(`visited ${food}`);
    
});