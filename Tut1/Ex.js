//simple 
/*
getName();
console.log(x); //print undefined
var x =7 
console.log(getName) // print body of function 
function getName(){
    console.log("JS")
}
*/

// fat arrow function error

/*
getName() // print not a function 

var getName = ()=>{
    console.log("Hello error")
}*/

// shadow
/*
let a =10
{
    var a  = 1;
    console.log(a);
}
*/

// map,filter,reduce


// debouncing 

/*
let ctr = 0
function getData(){
    console.log(ctr++);
}

const debouncing = (fn,delay)=>{
    let timer;
    return function(){
        let args = arguments; // store the function arguments
     =
        clearTimeout(timer); // if typed too fast, delay not meets
        timer = setTimeout(()=>{
          getData.apply(this,arguments);
        },delay)
    }
}
const better = debouncing(getData,300)
*/
// throttling 
const throttle = document.getElementById("throttle");
const exp = ()=>{
    console.log("expense")
}

function throttling(fun,limit){
    let flag = true
    return function(){
        let context = this
        let args = arguments
       if(flag){
           fun.apply(context,arguments);
           flag = false;
           setTimeout(()=>{
              flag = true
           },limit)
       }
       
    }
}
const betterThrottle = throttling(exp,500);
throttle.addEventListener("click",betterThrottle)
