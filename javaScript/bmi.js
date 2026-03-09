const form = document.querySelector("form");
console.log(form);
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");
  const under = document.querySelector("#under");
  const normal = document.querySelector("#normal");
  const over = document.querySelector("#over");

  if (height === "" || height < 0 || isNaN(height)) {
    results.innerHTML = `Please enter valid info ${height}`;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please enter valid into ${weight}`;
  } else {
    const bmi = Number((weight / ((height * height) / 10000)).toFixed(2));
    results.innerHTML = `BMI is:<span>${bmi}</span> `;
    if (bmi < 18.0) {
      under.style.color = "blue";
    } else if (bmi >= 18.0 && bmi <= 27.8) {
      normal.style.color = "green";
    } else {
      over.style.color = "red";
    }
  }
});
