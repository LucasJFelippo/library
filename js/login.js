$(".div-logo").width($(".div-logo").height());

document.querySelector(".btn-login").addEventListener('click', function(){
    let aux = loginverify((document.querySelector(".input-login").value), (document.querySelector(".input-login2").value));
    if (aux === 0) {
        document.querySelector(".input-login1").style.borderColor = "rgba(255, 0, 0, 0.4)";
        document.querySelector(".input-login2").style.borderColor = "rgba(255, 0, 0, 0.4)";
    }
    if (aux === 1) {
        document.querySelector(".input-login1").style.borderColor = "rgba(200, 200, 200, 0.8)";
        document.querySelector(".input-login2").style.borderColor = "rgba(255, 0, 0, 0.4)";
    }
    if (aux === 2) {
        document.querySelector(".input-login1").style.borderColor = "rgba(255, 0, 0, 0.4)";
        document.querySelector(".input-login2").style.borderColor = "rgba(200, 200, 200, 0.8)";
    }
    if (aux === 3) {
        window.location.href = "library.html";
    }
});
document.querySelector(".btn-singin").addEventListener('click', function(){
    window.location.href = "singin.html";
});

function loginverify(user, pass) {
    let aux = 0;
    if (user === "admin") {
        aux+=1;
    }
    if (pass === "admin") {
        aux+=2;
    }
    return aux;
}