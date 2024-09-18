//LOOPS
//print from 1 to 100
let ans = 0 ;
for (let i = 1 ; i<= 100 ; i++){
 ans = ans + i;
 
    }

    console.log(ans);

    // Function 
// wrong way
    let n = 100;
    let answ = 0;
    for (let i = 1 ; i <= n ;i++){
        answ = answ +1;

    }
    console.log(answ);

    let n2 = 1000;
    let answ2 = 0;

    for(let i =1 ; i<n ; i++){
        answ2 = answ2 + i;
    }

    console.log(answ2);

    // right way 

    let ans1 = 0;

function findsum(m){
    for (let i = 1 ; i <= m ; i ++){
        ans1 = ans1 + i;
    }
    return ans1;
} 
let ans2 = findsum(100);
console.log(ans2);
let ans3 = findsum(1000);
console.log(ans3);

// call back function 
function squarearea(n){
    return n*n;
}
//function which calls previous function 

function sumofsquare(a,b){
    const val1 = squarearea(a);
    const val2 = squarearea(b);

    return val1 + val2 ;
}
console.log(sumofsquare(1,2));

//find sum of squares and sum of cubes

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
console.log(sumofsomething(1,2,squarearea));
queueMicrotask(console.log("hello world"));


