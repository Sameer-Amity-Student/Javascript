// length

function getlength(str){
    console.log("Original String: "+ str);
    console.log("Length: " ,str.length);
}
getlength("hello world");

//indexof
function findIndexof(str,target){
    console.log("original string :" ,str);
    console.log("index", str.indexOf(target));
}
let index = findIndexof("Hello world" , "world");

// lastindexOf
function findlastindexOf(str,target){
    console.log("original string :" ,str )
    console.log("lastindex :" ,str.lastIndexOf(target));
}
let lastindex = findlastindexOf("Hello world" ,"world");

// slice 
function getslice(str ,start ,end){
    console.log("original String : " ,str);
    console.log("Index :",str.slice(start ,end))
}
getslice("Hello world",5,9);

//sub string 
function getsubstring(str , start ,end ){
    console.log("Original String : ", str);
    console.log("sub string: ", str.substring(start , end));
}
getsubstring("hello world", 5,9);

//replace
function replacestr(str,target,replacement){
    console.log("Original string:",str);
    console.log("Replace string:",str.replace(target,replacement));
}
replacestr("Hello world" , "world ", "sameer");

//split
function splitString(str, separator) {
    console.log("Original String:", str);
    console.log("After split:", str.split(separator));
  }
  splitString("Hello World", " ");

  //toUppercase 
  function toUpper(str){
    console.log("Original:",str);
    console.log("Affter Upper case :",str.toUpperCase());
    }
  toUpper("hello world");

  //toLower
  function toLower(str){
    console.log("Original:",str);
    console.log("After Lower case:",str.toLowerCase());
  }
  toLower("HELLO WORLD");