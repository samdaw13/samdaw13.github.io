document.getElementById('button').onclick = function add() {
    var number1 = parseFloat(document.getElementById("number1").value);
    var number2 = parseFloat(document.getElementById("number2").value);
    var total = sum(number1, number2);

    function sum(n1, n2) {
        return n1 + n2;
    }
    document.getElementById("total").innerHTML = total;
}
