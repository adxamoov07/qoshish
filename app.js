let table = document.querySelector(".table")
let banner = document.querySelector(".banner")

const email = document.querySelector("#email")
const Password = document.querySelector("#password")
const parol = document.querySelector(".parol")
const navbar = document.querySelector("header")


let tableb = document.querySelector(".table_banner_box")
let navbar1 = document.querySelector(".navbar_box1_1")
let h41 = document.querySelector(".navbar_box1_1>h4")
let h4 = document.querySelector(".navbar_box_1>h4")
let body = document.querySelector("body")
let inputs = document.querySelectorAll(" .login input")



function qoshish() {
    table.style.display = ("none");
    banner.style.display = ("flex");
    navbar.style.display = ("none");

}

function qaytish() {
    table.style.display = ("flex");
    banner.style.display = ("none");
    navbar.style.display = ("flex");

}

let bann = document.querySelector(".table_banner")
let boxx = document.querySelector(".table_box")
let bx1 = document.querySelector("#bx1")
let bx2 = document.querySelector("#bx2")
let bx3 = document.querySelector("#bx3")
let bx4 = document.querySelector("#bx4")
let bx5 = document.querySelector("#bx5")
let index = 0


function ele() {
    let div = document.createElement("div")
    let nav = document.createElement("div")
    let soz = document.createElement("h4")
    let soz1 = document.createElement("h4")
    let soz2 = document.createElement("h4")
    let soz3 = document.createElement("h4")
    let soz4 = document.createElement("h4")
    let soz5 = document.createElement("h4")

    let sox1 = document.createElement("div")
    let sox2 = document.createElement("div")
    let sox3 = document.createElement("div")
    let sox4 = document.createElement("div")
    let sox5 = document.createElement("div")
    div.className = "table_banner_box"
    nav.className = "navbar_box1_1"
    sox1.className = "navbar_box_1"
    sox2.className = "navbar_box_1"
    sox3.className = "navbar_box_1"
    sox4.className = "navbar_box_1"
    sox5.className = "navbar_box_1"
    document.body.appendChild(div)
    table.appendChild(boxx)
    boxx.appendChild(bann)
    bann.appendChild(div)

    div.appendChild(nav)
    nav.appendChild(soz)
    index = index + 1
    soz.innerHTML = index
    div.appendChild(sox1)
    sox1.appendChild(soz1)
    soz1.innerText = bx1.value;
    bx1.value = ""
    div.appendChild(sox2)
    sox2.appendChild(soz2)
    soz2.innerText = bx2.value;
    bx2.value = ""
    div.appendChild(sox3)
    sox3.appendChild(soz3)
    soz3.innerText = bx3.value;
    bx3.value = ""
    div.appendChild(sox4)
    sox4.appendChild(soz4)
    soz4.innerText = bx4.value;
    bx4.value = ""
    div.appendChild(sox5)
    sox5.appendChild(soz5)
    soz5.innerText = bx5.value;
    bx5.value = ""


}




let logineEmail = "hokim"
let loginePassword = "5800"



function login1() {
    if (email.value == logineEmail && password.value == loginePassword) {
        parol.style.display = ("none");
        table.style.display = ("flex");
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


