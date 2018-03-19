$(".div-logo").width($(".div-logo").height());

document.querySelector(".btn-sing").addEventListener('click', function () {
    let c = 0;
    if(document.querySelector(".input-singinu").value !== "admin"){
        document.querySelector(".input-singinu").style.borderColor = "rgba(255, 0, 0, 0.4)";
        c++;
    }
    else{
        document.querySelector(".input-singinu").style.borderColor = "rgba(200, 200, 200, 0.8)";
    }
    if(document.querySelector(".input-singine").value !== "admin@admin.com"){
        document.querySelector(".input-singine").style.borderColor = "rgba(255, 0, 0, 0.4)";
        c++;
    }
    else{
        document.querySelector(".input-singine").style.borderColor = "rgba(200, 200, 200, 0.8)";
    }
    if(document.querySelector(".input-singinp").value !== "admin"){
        document.querySelector(".input-singinp").style.borderColor = "rgba(255, 0, 0, 0.4)";
        c++;
    }
    else{
        document.querySelector(".input-singinp").style.borderColor = "rgba(200, 200, 200, 0.8)";
    }
    if(document.querySelector(".input-singinc").value !== "admin"){
        document.querySelector(".input-singinc").style.borderColor = "rgba(255, 0, 0, 0.4)";
        c++;
    }
    else{
        document.querySelector(".input-singinc").style.borderColor = "rgba(200, 200, 200, 0.8)";
    }
    if(c === 0){
        window.location.href = "library.html";
    }
});