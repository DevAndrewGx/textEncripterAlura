// We need to create our variables to encript text
let text = document.getElementById("textoArea");
const imgToy = document.getElementById("img-toy");
const mssNotFound = document.getElementById("message-not-found");
const spanMessage = document.getElementById("change-text");
const encryptedContainer = document.querySelector(".encrypted-container");

encryptedContainer.style.display = 'none';

// We're going to validate if the data have accent and if the data is UpperCase


function validateText(text) {
    // We need to validate that the string has no weird characteres
    const regex = /^[a-z ]+$/;
    return regex.test(text);
}

//Here we're going to use this function to encript the text.
function encript() {
    if (!validateText(text.value)) {
        alert("El texto esta mayuscula o contiene caracteres que no son alfabeticos");
        text.value = "";
    } else {
        let encryptedText = text.value.replace(/e/gi, "enter");
        encryptedText = encryptedText.replace(/i/gi, "imes");
        encryptedText = encryptedText.replace(/a/gi, "ai");
        encryptedText = encryptedText.replace(/o/gi, "ober");
        encryptedText = encryptedText.replace(/u/gi, "ufat");
        console.log(encryptedText);

        imgToy.style.display = "none";
        mssNotFound.style.display = "none";
        spanMessage.innerHTML = encryptedText;
        encryptedContainer.style.display = "block";
    }
}

function decript() {

    let decript = text.value.replace(/enter/gi, "e");
    decript = decript.replace(/imes/gi, "i");
    decript = decript.replace(/ai/gi, "a");
    decript = decript.replace(/ober/gi, "o");
    decript = decript.replace(/ufat/gi, "u");

    spanMessage.innerHTML = decript;
}
