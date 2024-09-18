function pusharray(arr , element){
    console.log("Original Array:",arr);
    arr.push(element);
    console.log("After push:",arr);
}
let personArray = [12,13,14,15,16,17,18,19];
pusharray(personArray,20);

//pop
function poparray(arr,element){
    console.log("Original Array:",arr);
    arr.pop(element);
    console.log("AFterpop:",arr);
}
poparray(personArray,20);

//shift
function shiftarray(arr,element){
    console.log("Original array:",arr);
    arr.shift(element);
    console.log("After shift:",arr);
}
shiftarray(personArray,20);

let initialArray = [1,2,3];
let initialarray = [4,5,6];
console.log(initialArray.concat(initialarray));


function addArrays(...arrays) {
    // Use the reduce method to concatenate all arrays
    const result = arrays.reduce((acc, curr) => acc.concat(curr), []);
    console.log(result);
}

addArrays([1, 2, 3], [4, 5, 6], [7, 8, 9]);
function logThing(str){
    console.log(str);
}
initialArray.forEach(logThing);

function log1(){
    console.log("Hello World 1");
}


// push
function pushArray(arr,element){
    console.log("Originsl Array :" ,arr)

    arr.push(element);

    console.log("After push :",arr);
}
pushArray([1,2,3,4,5,6,7,8,9,10],11);

//pop
function popArray(arr){
    console.log("Originsl Array :",arr);


}

const InitialArray = [1,2,3];
InitialArray.shift();
console.log(InitialArray);

Initialarray = [ 1,2,3];
Initialarray.unshift(2);
console.log(Initialarray);

console.log(InitialArray.concat(Initialarray));


logThing(1);
logThing(2);
logThing(3);

function log1() {
    console.log("Hello world 1 ");
}

function log2() {
    console.log("Hello world2 ");
}

function log3() {
    console.log("Hello world 3 ");
}

//logWhatspresent -- callback function 

