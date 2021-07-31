let str = document.getElementById("myInput");
let submit = document.querySelector('input[type="submit"]');
const regex3 = new RegExp(/^[0-9]{6}\D{3,}/g); 

str.addEventListener("keyup", function () {
  
  
  if (str.value.length >= 6 && regex3.test(str.value)) {

    submit.removeAttribute("disabled");
    submit.classList.add("enabled");

  } else if (str.value.length < 6 || (regex3.test(str.value)) == false ) {

    submit.setAttribute("disabled", "true");
    submit.classList.remove("enabled");
  }
})

