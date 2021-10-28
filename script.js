function abrirGithub(e) {
    window.open("https://github.com/TadeOtero")
}

function abrirGmail(e) {
    window.open("https://mail.google.com/mail/u/0/#inbox")
}

function abrirInstagram(e) {
    window.open("https://www.instagram.com/tade.otero/")
}

let github = document.getElementById("github");
let gmail = document.getElementById("gmail");
let instagram = document.getElementById("instagram");

github.addEventListener("click", abrirGithub);

gmail.addEventListener("click", abrirGmail);

instagram.addEventListener("click", abrirInstagram);