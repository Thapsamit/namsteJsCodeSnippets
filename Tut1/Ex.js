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

/*
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
*/

// promises

// first using callback
/*
const cart = ['pants','jeans','shirts']

// make payment is under the control of create order therefore it is not gurranteed that it will be called or maybe called twice or thrices
// can't blindly trust it 
createOrder(cart,(orderId)=>{
    makePayment(orderId)
})


const promise = creatOrder(cart)
// gives like {data:undefined}
// it later filled the data with value after promise resolved maybe after 2s,3s or ns
// how to resolve ??

promise.then((orderId)=>{
    proceddToPayment(orderId)
})
*/

// fetching github profile






const url = 'https://api.github.com/users/Thapsamit';

const user = fetch(url)
console.log('test')
console.log(user)
user.then((data)=>{
    console.log(data)
})

// promise chaining 

// when we have multiple callbacks then instead making a callack hell we can use promise chaining


createOrder(cart)
.then(()=>{
    return updateSummary(info) // return required to return a promise object
})
.then(()=>{
    return walletSummary(id)
})

