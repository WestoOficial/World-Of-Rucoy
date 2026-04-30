// Após 3 segundos, esconder splash e mostrar login
setTimeout(() => {
    document.getElementById("splash").style.display = "none";
    document.getElementById("login").style.display = "flex";
}, 3000);