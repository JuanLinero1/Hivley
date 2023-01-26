const form  =  document.querySelector(".form")
const input = document.querySelectorAll("input")

// inputs
const name  =  document.querySelector(".inputName")
const email = document.querySelector(".inputEmail")
const passw = document.querySelector(".inputPass")

form.addEventListener("submit", (e) => {
  window.localStorage.setItem("Name", JSON.stringify(name.value))
  input.forEach(el => {
    ( el !== null || el !== "" ) ? window.location.href = "../content/content.html" : "error"
    e.preventDefault()
  })
})

