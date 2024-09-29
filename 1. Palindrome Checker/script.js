document.addEventListener("DOMContentLoaded", () => {
    const check = document.getElementById("check-btn");
    const inputText = document.getElementById("text-input");
    const result = document.getElementById("result").querySelector("p");

    const validateInput = () => {

    if(inputText.value.length===0){
        alert("Please input a value");
        return
    };
    console.log(inputText.value);
    const cleanText = inputText.value.replace(/[^a-zA-Z0-9]/g,"").toLowerCase();

    const reverseText = cleanText.split("").reverse().join("");

    if (cleanText === reverseText) {
        result.textContent = `${inputText.value} is a palindrome`;
    }else{
        result.textContent = `${inputText.value} is not a palindrome`;
    }

    }

    check.addEventListener("click", validateInput);

});