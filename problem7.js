var check=()=>{
    var table= document.getElementById("result")
var res = '<table><tr>';
for (var i = 2; i <= 30; i++) {
    var flag = 0;

    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            flag = 1;
            break;
        }
    }
    if (i > 1 && flag == 0) {
        res += `<td>${i}</td>`; 
    }
}
res += '</tr></table>'
    table.innerHTML=res
}
check()