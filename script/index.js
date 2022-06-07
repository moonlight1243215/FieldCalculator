const figure = document.getElementById("figure");
const width1 = document.getElementById("widthTop");
const width2 = document.getElementById("widthBottom");
const height1 = document.getElementById("heightRight");
const height2 = document.getElementById("heightLeft");
const field = document.getElementById("field");
const circuit = document.getElementById("circuit");

function calculator() {
    const firstInput = document.getElementById("firstInput").value;
    const secondInput = document.getElementById("secondInput").value;
    const parameter = document.getElementById("selectParameter");
    const nameParameter = parameter.value;
    if(firstInput < 0 || secondInput < 0) {
        alert("liczba nie może być ujemna, proszę podaj liczby dodatnie");
    }
    else if(firstInput == 0 || secondInput == 0) {
        alert("liczba nie moze być równa zero, odcinek zawsze jest większy od 0");
    }
    else {
        figure.style.height = secondInput + 'px';
        figure.style.width = firstInput + 'px';
        height1.innerHTML = secondInput + nameParameter;
        width1.innerHTML = firstInput + nameParameter;
        height2.innerHTML = secondInput + nameParameter;
        width2.innerHTML = firstInput + nameParameter;
        let fieldValue = firstInput * secondInput;
        field.innerHTML = fieldValue + nameParameter + '^2';
        let circuitValue = (2 * firstInput) + (2 * secondInput);
        circuit.innerHTML = circuitValue + nameParameter;
    }
}

