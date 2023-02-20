/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio konvertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formulė: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */
const myForm = document.querySelector("form");
console.log(myForm);

myForm &&
  myForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const textInput = document.getElementById("search");
    const textValue = textInput && textInput.value;

    if ((textValue > 0 && textValue <= 500) || textValue === NaN) {
      const outputElement = document.getElementById("output");

      const newLbText = document.createElement("p");
      newLbText.className = "headline-for-js";
      newLbText.textContent =
        "Your enter number in lb: " + textInput.value * 2.2046;

      const newGText = document.createElement("p");
      newGText.className = "headline-for-js";
      newGText.textContent =
        "Your enter number in g: " + textInput.value / 0.001;

      const newOzText = document.createElement("p");
      newOzText.className = "headline-for-js";
      newOzText.textContent =
        "Your enter number in oz: " + textInput.value * 35.274;

      const line = document.createElement("hr");
      line.className = "line";

      outputElement.append(newLbText, newGText, newOzText, line);
    } else {
      alert("enter a number from 1 to 500");
    }
  });
