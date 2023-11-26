const form = document.querySelector("form")
const nombre = document.getElementById("nombre")
const email = document.getElementById("email")
const password = document.getElementById("password")
const confirmPassword = document.getElementById("confirm-password")
const photoURL = document.getElementById("photo")       


form.addEventListener("submit", (event)=>{
    event.preventDefault()
    if (password === confirmPassword) {
        fetch("http://localhost:3000/")
    }else{
        document.getElementById("password-no-match").style.display = "block"
    }
})