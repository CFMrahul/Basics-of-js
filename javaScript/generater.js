const form = document.querySelector("form");
console.log(form);
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const result = document.querySelector("#results");
  const under = document.querySelector("#under");
  const normal = document.querySelector("#normal");
  const over = document.querySelector("#over");

  if (height === "" || height < 0 || isNaN(height)) {
    result.innerHTML = `please give a valid height ${height}`;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    result.innerHTML = `please give a valid weight ${weight}`;
  } else {
    const bmi = Number((weight / ((height * height) / 10000)).toFixed(2));
    // show result is
    result.innerHTML = `Result :  <span>${bmi}</span>`;
    if (bmi < 18.6) {
      under.style.color = "blue";
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      normal.style.color = "blue";
    } else {
      over.style.color = "blue";
    }
  }
});
