/* calcolo prezzo biglietto
prezzo al km = 0.21 euro
sconto 20% per minorenni
sconto 40% per over 65*/

const confirm = document.querySelector('#btn-conf');
// const delite = document.querySelector("#btn-del");


confirm.addEventListener("click", function () {
  const km = parseInt(document.getElementById("km").value);
  const age = parseInt(document.getElementById("age").value);
  const pricePerKm = 0.21;
  const price = (pricePerKm * km);
  const discountMinor = ( (price * 20) / 100 )
  const discountOver = ( (price * 40) / 100 )
  const name = document.querySelector("#name").value;
  const discountType = document.querySelector("#discount-type");


  if (age < 18) {
    document.getElementById("final-price").innerHTML =
      price - discountMinor.toFixed(2);

    document.querySelector("#discount-type").innerHTML =
      "sconto under 18";

  } 
  else if (age > 65) {
    document.getElementById("final-price").innerHTML =
      price - discountOver.toFixed(2);

      document.querySelector("#discount-type").innerHTML = "sconto over 65";
  } 
  else if (isNaN(age) || isNaN(km)) {
    document.getElementById("final-price").innerHTML = "please,enter a number";
  } 
  else {
    document.getElementById("final-price").innerHTML = price.toFixed(2);

    document.querySelector("#discount-type").innerHTML = "biglietto standard";
  }

  document.querySelector('#ticket-name').innerHTML = name
});



// delite.addEventListener("click",function () {

// })