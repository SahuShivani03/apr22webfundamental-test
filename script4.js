// question -4 WAP to print Nth prime number.(Input: 5, Output: 11, since 11 is the 5th prime number)

let pr = parseInt(prompt('enter your number'))
//checkPrime(nu)
function checkPrime(num){
if(num<=1){
    return false;
}
for(let i = 2; i<pr;i++){
    if(num%i===0){
        return false;
    }
}
return true;
}
if(checkPrime(pr)){
    console.log('true')
}else{
    console.log('false');
}