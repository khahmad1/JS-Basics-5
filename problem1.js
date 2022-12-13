let input_1 = document.getElementById("name")

input_1.onblur = function() {
    alert(`Hello ${input_1.value}`)
}