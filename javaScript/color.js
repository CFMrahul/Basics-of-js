const btn = document.querySelectorAll(".button");
const body = document.querySelector("body");

btn.forEach((button) => {
  button.addEventListener("click", function (e) {
    if (e.target.id === "orange") {
      body.style.backgroundColor = e.target.id;
    } else if (e.target.id === "pink") {
      body.style.backgroundColor = e.target.id;
    } else if (e.target.id === "black") {
      body.style.backgroundColor = e.target.id;
    } else if (e.target.id === "green") {
      body.style.backgroundColor = e.target.id;
    }
  });
}); 
