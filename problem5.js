var number = document.querySelector("#number");
var op = document.querySelector("#op");

document.getElementById("submit").addEventListener("click",function(){
    var sum = 0;
    var product =1;
    for (var  i = 1; i <= parseInt(number.value); i++) {
        if(op.value == "+"){
            sum = sum + i;
            document.getElementById("result").innerText = sum;}
        else if(op.value == "*"){
            product  = product * i;
            document.getElementById("result").innerText = product ;}
}
}
);
