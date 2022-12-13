var number = document.querySelector("#number")

document.getElementById("submit").addEventListener("click",function(){
    var sum = 0;
    for (var i = 1; i <= parseInt(number.value); i++) {

        if((i%3==0)||(i%5==0)){
        sum = sum + i;


        document.getElementById("result").innerText = sum;}
}
});