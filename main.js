

const nav = document.querySelector(".nav");
const bars = document.querySelector(".bars");
const main = document.querySelector("main");
const odziv = document.querySelector(".odziv");

const btnPrijava = document.querySelector(".btnprijava");
const formPrijava = document.querySelector(".prijava");
const extBtn = document.querySelectorAll(".exit__btn");

const delavniceBtn = document.querySelectorAll(".btn");
const greyLine = document.querySelector(".grey__line")
const delavnicaVsebina = document.querySelectorAll(".delavnica__content")

const cookies = document.querySelector(".cookise");
const cookieBtn = document.querySelector(".cookie__btn");



window.addEventListener("DOMContentLoaded", function () {
    delavnicaVsebina.forEach(function (vsebina) {
        if(vsebina.classList.contains("velikonocna")){
            vsebina.style.display = "block";
        }
        else {
            vsebina.style.display = "none";
        }
    })
})

delavniceBtn.forEach(function (btn) {
    btn.addEventListener("click", function (e) {

        visina = greyLine.offsetTop
        console.log(visina)
        window.scrollTo({
            top: visina - 20,
            left: 0,
            behavior: 'smooth'
        });
        delavnicaVsebina.forEach(function (delavnica) {
            if(delavnica.classList.contains(e.currentTarget.dataset.id)){
                delavnica.style.display = "block";

            }
            else {
                delavnica.style.display = "none";
            }
        })

    })
})


bars.addEventListener("click", function () {
    nav.classList.toggle("show");
    main.style.height = 0;
    main.style.overflow = "hidden";
})

btnPrijava.addEventListener("click", function () {
    formPrijava.style.display = "flex";
    formPrijava.style.opacity = "1";
})
extBtn.forEach(function (btn) {
    btn.addEventListener("click", function () {
        formPrijava.style.display = "none";
        formPrijava.style.opacity = "0";
    })
})


setTimeout( function () {
    if(!localStorage.getItem("cookieBannerDisplayed")){
        cookies.classList.add("active");
    }

}, 2000 )
cookieBtn.addEventListener("click", function () {
    cookies.classList.remove("active");
    localStorage.setItem("cookieBannerDisplayed", "true");
})

