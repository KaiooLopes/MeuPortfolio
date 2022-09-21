import Menu from "./menu.js";
import Projects from "./projects.js";
import Scroll from "./scroll.js";

(function () {
    let $body = document.querySelector("body");
    $body.classList.remove("no-js")
    $body.classList.add("js")

    let menu = new Menu({
        container: ".header__nav",
        toggleBtn: ".header__BtnMenu",
        widthEnabled: 768
    })

    let cert = new Menu({
        container: ".showCert",
        toggleBtn: ".certificado",
        widthEnabled: false
    })

    let calculadora = new Projects({
        id: 5,
        link: "https://github.com/KaiooLopes/Calculadora",
        title: "Calculadora",
        subtitle: "Calculadora simples para exercitar o HTML, CSS e Javascript",
        img: "img/calculadora..png"
    })

    let conversor = new Projects({
        id: 6,
        link:"https://github.com/KaiooLopes/ConversorDeMedidas",
        title: "Conversor",
        subtitle: "Conversor de Medidas feito em Typescript",
        img: "img/Conversor.png"
    })

    Scroll();
})();