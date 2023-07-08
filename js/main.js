// We need to create our variables to encript text
const text = document.getElementById("texto");

// We're going to validate if the data have accent and if the data is UpperCase

function isUpperCaseWithAccent(text) {
    // We have to create regex to evaluate the string
    const regex = /[A-ZáéíóúÁÉÍÓÚ]/;
    const tieneMayusculasYAcentos = regex.test(text);

    return tieneMayusculasYAcentos;
}


function withAccent(text) {
    // We need to validate that the string has no weird characteres
    const regex = /[^A-Za-z]/;
    const tieneCaracteresRaros = regex.test(text);

    return tieneCaracteresRaros;
}



function encript() {
    if (isUpperCaseWithAccent(text.value) || withAccent(text.value)) {
        alert("El texto esta mayuscula o contiene caracteres que no son alfabeticos");
    }else {
        console.log("No tiene caracteres raros");
    }
}
