document.getElementById("btn").addEventListener("click", () => {
    var result = '';
    for (var i = 0; i <= 12; i++) {
        for (var j = 0; j <= 12; j++) {
             if (j == 0 && i > 0) {
                result +=`${i}:`;
                result += " "
            }
            else if (i > 0 && j > 0) {
                result += `${i*j}`;
                result += " "
            }
        }
        result += "<br>"
    }
    document.getElementById("display").innerHTML = `${result}`
    console.log(result);
});