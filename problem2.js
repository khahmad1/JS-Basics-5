let username = document.querySelector("#name")
username.addEventListener("blur" ,function() {
    if (username.value == "Alice" || username.value== "bob" ) {
        alert(`hello ${username.value}`);
      

        }
        else { 
            alert("hello stranger");
    }
})