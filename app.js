let table = document.querySelector("table")
let banner = document.querySelector(".banner")

const email = document.querySelector("#email")
const Password = document.querySelector("#password")
const parol = document.querySelector(".parol")
const navbar = document.querySelector("header")

function qoshish() {
    table.style.display = ("none");
    banner.style.display = ("flex");
    navbar.style.display = ("none");

    
}

function qaytish () {
    table.style.display = ("block");
    banner.style.display = ("none");
    navbar.style.display = ("flex");

}

let logineEmail = "hokim"
let loginePassword = "5800"

function login1() {
    if (email.value == logineEmail && password.value == loginePassword) {
        parol.style.display = ("none");
        table.style.display = ("block");
        banner.style.display = ("none");
        navbar.style.display = ("flex");
    }
    else {
        email.style.borderColor = "red"
        Password.style.borderColor = "red"
        email.style.outLine = "red"
        Password.style.ouLline = "red"
        
        alert("code xato")


    }
}


