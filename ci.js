var output1= document.querySelector("#output1");
var principle= document.querySelector("#p1");
var rate= document.querySelector("#r1");
var time= document.querySelector("#t1");
var N=document.querySelector("#N");
var calculate= document.querySelector(".calculate1");

calculate.addEventListener('click',function calculate(){
    var X= (Math.pow((1+ r1.value/N.value), (N.value*t1.value)));
    var CI= (p1.value*X);
    output1.innerText="Your compound Interest is: " + CI;
}
)
