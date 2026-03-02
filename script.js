"use strict";

const textInput = document.querySelector("#toCode");
const keyInput = document.querySelector("#key");

const encryptBtn = document.querySelector("#btn");
const decryptBtn = document.querySelector("#decrypt");
const clearBtn = document.querySelector("#clear");

const resultText = document.querySelector(".res");

function Cesar(text, key) {
    const letters = "abcdefghijklmnopqrstuvwxyz";
    let result = "";
    let shift = key % letters.length;

    for (let i = 0; i < text.length; i++) {
        let char = text[i].toLowerCase();
        let index = letters.indexOf(char);

        if (index !== -1) {
            result += letters[(index + shift + letters.length) % letters.length];
        } else {
            result += text[i];
        }
    }
    return result;
}

encryptBtn.onclick = function () {
    let text = textInput.value;
    let key = Number(keyInput.value);
    resultText.innerText = Cesar(text, key);
};

decryptBtn.onclick = function () {
    let text = resultText.innerText;
    let key = Number(keyInput.value);
    resultText.innerText = Cesar(text, -key);
};

clearBtn.onclick = function () {
    resultText.innerText = "WYNIK";
};