var Leonardo = window.document.getElementById("Leonardo")
var Samantha = window.document.getElementById("Samantha")
var Bruna = window.document.getElementById("Bruna")
var setadireita = window.document.getElementById("setadireita")
var setaesquerda = window.document.getElementById("setaesquerda")

function RolarParaDireita() {
    Leonardo.style = "display:none"
    Bruna.style = "display:flex"
    setadireita.style = "display:on"
    setaesquerda.style = "display:flex;margin-top 55px"
}

function RolarParaEsquerda(){
    Leonardo.style = "display:flex"
    Bruna.style = "display.none"
    setadireita = "display:flex;margin-top 55px"
    setaesquerda.style = "display:none"
}