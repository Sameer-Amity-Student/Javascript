// write the sum function 
function sum(a,b){
    console.log(a+b);
    
}
sum(152354,216595);

//the greatest number function between 2 numbers 
function greatestno(a,b){
    
    if (a>b){
        console.log("the greatest number is "+ a);
    }
    else {
        console.log("the greatest number is "+b);
    }
}
greatestno(1532656,1234567);

//write the arithimatic function with call backs

function arithimatic(a,b,fnTocall){
 fnTocall(a,b);
 }
  
  function sum(a,b){
    console.log(a+b);
  }
  
  function sub(a,b){
    console.log(a-b);
  }
  
  function multiply(a,b){
    console.log(a*b);
  }
  
  function divide(a,b){
    console.log(a/b);
  }
  
  arithimatic(10,5,sum);
  arithimatic(10,5,sub);
  arithimatic(10,5,multiply);
  arithimatic(10,5,divide);

  // fizz buzz function for the 1st 100 numbers 
  // FizzBuzz is a popular coding challenge used in interviews to test basic programming skills. The challenge typically asks the interviewee to write a program that prints the numbers from 1 to 100, with a few exceptions:
  // - If the number is divisible by 3, print "Fizz" instead of the number
  // - If the number is divisible by 5, print "Buzz" instead of the number
  // - If the number is divisible by both 3 and 5, print "FizzBuzz" instead of the number
  // - If the number is divisible by both 3 and 5, print "FizzBuzz" instead of the number
  // - Otherwise, print the number

 

  function fizzbuzz(limit){
    for (let i = 1 ; i<= limit ; i++){
    if(i % 3  == 0 && i % 5 == 0 ){
        console.log("FizzBuzz");
    }
    else if (i % 3 == 0){
        console.log ("fizz");
    }
    else if (i % 5 == 0 ){
        console.log("buzz")
    }
    else {
        console.log(i);
    }
    }
}
fizzbuzz(20);


   