function compareNumber() {
    let num1 = parseFloat(document.getElementById("numb1").value)
    let num2 = parseFloat(document.getElementById("numb2").value)
    console.log(num1, num2)

    if (num1 === num2) {
        alert('los números son iguales')
    }
    else if (num1 < num2) {
        alert("el número " + num2 + " es mayor que el " + num1 + " y el número " + num1 + " es menor que el " + num2)
    }
    else {
        alert("el número " + num1 + " es mayor que el " + num2 + " y el número " + num2 + " es menor que el " + num1)

    }
    if (num1 <= 0, num2 <= 0) {
        alert('Ingrese un número mayor que 0')
    }
    if (typeof num1 != "number") {
        alert('Ingrese un número')
    }

}
