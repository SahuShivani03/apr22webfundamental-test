// question-3  Write a program to display the n terms of odd natural number and their sum.
let odd =0;
let oddNum = parseInt(prompt('Enter Your Number'))
function displayOddNaturalNumber(oddNum){
    for(let i = 1; i<=oddNum;i+=2){
        odd += i;
        console.log(i);
    }
console.log("the sum of odd natural number" + " " + odd )
}
displayOddNaturalNumber(oddNum)