//write a program whuch counts from 1 - 1000
let x = 0;
let answer = 0;
for(let y = 0 ; y<= 1000 ; y++){
   
console.log(y);
}

// print all even number from an Array
let numberArray = [1,2,3,4,5,6,7,8,9,10];
let evennumber = [  ];
for ( let i = 0 ; i < numberArray.length ; i ++){
    if(numberArray[i] % 2 == 0){
        evennumber.push(numberArray[i]);
    }
}
console.log(evennumber);

// print the biggest number in an array

let numArray = [21,25,2,6,56,6,4,56556,6,6565,5,12,11,235642,2,56,454,56,256,56,456,6];
for (let z = 0 ; z<numArray.length ; z++){
    if (z>numArray[z]){
        console.log(z);
    }
}


function sum(a,b,fnTocall){
    return fnTocall=a+b;
}
function displayresult(data){
  console.log("The result of the sum is " + data);
}
function displaypassiveresult(data){
    console.log("the sum's result is "+data);
} 
 let passiveresult = sum(5454542364,454668423,displaypassiveresult);
 console.log(passiveresult);

 let result = sum(48,84,displayresult);
 console.log(result);