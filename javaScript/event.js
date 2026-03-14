// document.getElementById("mountain-lake").onclick = function (e){
//     alert('butter fly')
// } // this is bad practics.

// document.getElementById('images').addEventListener("click", function(e){
//     console.log("click good")
//     e.stopPropagation()
// }, false)

// document.getElementById("mountain-lake").addEventListener('click', (e)=>{
//     console.log(e)
// }, true) //this is good practics.

//  document.getElementById('google').addEventListener('click', function(e){
//     console.log("click here")
//     e.preventDefault()
//  })

document.querySelector("#images").addEventListener("click", function (e) {
  let removeIt = e.target.parentNode;
  //   removeIt.remove()
  //removeIt.parentNode.removeChild(removeIt)
  console.log(e.target.tagName);
  if (e.target.tagName === "IMG") {
    removeIt.remove();
  } else {
    console.log("LI");
  }
});
