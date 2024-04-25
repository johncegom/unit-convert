/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const unitInputEl = document.getElementById("unit-input");
const convertBtn = document.getElementById("convert-btn");
const lengthEl = document.getElementById("length-el");
const volumeEl = document.getElementById("volume-el");
const massEl = document.getElementById("mass-el");

// const unit = [
//   { meter: 3.281 },
//   { feet: 0.305 },
//   { liter: 0.264 },
//   { gallon: 3.788 },
//   { kilo: 2.204 },
//   { pound: 0.454 },
// ];

convertBtn.addEventListener("click", function () {
  const inputValue = unitInputEl.value;
  if (inputValue) {
    convertUnit(inputValue);
  }
});

function convertUnit(number) {
  let meter = 3.281;
  let liter = 0.264;
  let kilo = 2.204;
  let feet = (1 / meter).toFixed(3);
  let gallon = (1 / liter).toFixed(3);
  let pound = (1 / kilo).toFixed(3);
  lengthEl.innerText = `${number} meters = ${(number * meter).toFixed(
    3
  )} feet | ${number} feet = ${(number * feet).toFixed(3)} meters`;

  volumeEl.innerText = `${number} liters = ${(number * liter).toFixed(
    3
  )} gallons | ${number} gallons = ${(number * gallon).toFixed(3)} liters`;
  massEl.innerHTML = `${number} kilograms = ${(number * kilo).toFixed(
    3
  )} pounds | ${number} pounds = ${(number * pound).toFixed(3)} kilograms`;
}
