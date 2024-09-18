// Promises 
const fs = require("fs");
const { setTimeout } = require("timers/promises");
function findsum(n){
let ans = 0 ;
for(let i = 0 ; i<n ; i++){
    ans+= i;
}
return ans;

}

function findsumtill100(){
    return findsum(100);
}
setTimeout(function(){
    findsumtill100
},1000)
console.log("hello world");

function sameerreadfile(){
    console.log("inside sameer read file");
    return new Promise(function(resolve){
        console.log("inside promises");
        fs.readFile("a.txt","utf-8", function(err,data){
            resolve(data);
        });
    })
}
// call back function 
function ondone(data){
    console.log(data);
}

setTimeout(function(){var a = sameerreadfile();
console.log(a);
a.then(ondone);},1000)

let  personArray = ["sameer","zainab" ," shahid"];
let   genderArray = ["male","female", "male"];
for(let i = 0 ; i< personArray.length ; i++){
    if(genderArray[i] == "female"){
        console.log(personArray[i]);
}
}
var d = new Promise(function(resolve){
    resolve("hi there ");

});
function callback(){
    console.log(d);
}

d.then(callback);
let p =  new Promise(function(resolve){
    resolve("hi there 2");
});

p.then(function() {
    console.log(p);
});

function sameerasyncfunction(callback){
    setTimeout(callback ,2000);
}
sameerasyncfunction(function(){
    console.log("hello!");
});

 
function sameerasyncfunction() {
    let p = new Promise(function(resolve){
        //do some async logic here 
        setTimeout(function(){
            resolve("hi there3")},1000);
    });
    return p;
}

async function main() {
    let value = await sameerasyncfunction()
    console.log(value);
}

main();