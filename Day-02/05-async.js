//find sum of squares and sum of cubes
const { log } = require("console");
const fs = require("fs");
const { setTimeout } = require("timers/promises");

function squares(n){
    return n*n;
}

// cubes 
function cubes(n){
    return n*n;
}

// sum of squares 
function sumofsquare(a,b){
    const val3 = squares(a);
    const val4 = squares(b);

    return val3 + val4;
}

//sum of cubes 
function sumofcubes(a,b){
    const val5 = cubes(a);
    const val6 = cubes(b);

    return val5+val6;
}
console.log(sumofsquare(1,2));
console.log(sumofcubes(1,2));

//efficient code be like
function sumofsomething(a,b,callback){
    console.log("Original Values:" ,a,b);
    console.log(callback);
    const val7 = callback(a);
    const val8 = callback(b);
    return val7 + val8;
}


//common async function 

function syncsleep(){
    for (let i =0 ; i <100000000; i++){
        i++
    }
}
syncsleep();



setTimeout(function(){
    console.log("hello world1");
    },1000);
    //busywaiting 

console.log("hello world2");
console.log("hello world3");
console.log("hello world4");



let a = 0 ;
for(let i=0 ; i<1; i++){
  a++;
}

setTimeout(function(){
    console.log("from insile asunc fn ")
},5000);
console.log("hello world from sameeer hussain ");

 