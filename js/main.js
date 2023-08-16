// We need to create our variables to encript text
let text = document.getElementById("texto");
const imgToy = document.getElementById("img-toy");
const mssNotFound = document.getElementById("message-nfound");

// We're going to validate if the data have accent and if the data is UpperCase

function isUpperCase(text) {
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

//Here we're going to use this function to encript the text.
function encript() {
    if (isUpperCase(text.value) || withAccent(text.value)) {
        alert(
            "El texto esta mayuscula o contiene caracteres que no son alfabeticos"
        );
        text.value = "";
    } else {
        imgToy.style.display = "none";
        console.log("No tiene caracteres raros");
    }
}

function decript() {}
