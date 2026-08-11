 const botao = document.querySelectorAll("button");
    const botoes= document.querySelectorAll("button");
    botoes.forEach(function(botao) {
        let curtiu= false;
    botao.addEventListener("click",botaoClicado);
    function botaoClicado () {
        console.log("fui clicado");
        let texto= botao.querySelector("span");
        if (curtiu === false) {
        texto.textContent++;
        curtiu = true;
    } else {
    texto.textContent++;
    curtiu = false;
    }
    }
    })
const temaclaro = document.querySelector(".temaclaro");
const Titulodoblog = document.querySelector(".Titulodoblog");
const janelaconfiguracao = document.querySelector(".janelaconfiguracao")
const temaescuro = document.querySelector(".temaescuro");
const body = document.querySelector(".body")
temaclaro.onclick = function() {
 body.classList.add('temaclaro')
 Titulodoblog.classList.add('temaclaro')
 janelaconfiguracao.classList.add('temaclaro')
}
temaescuro.onclick = function() {
 body.classList.remove('temaclaro')
 Titulodoblog.classList.remove('temaclaro')
 janelaconfiguracao.classList.remove('temaclaro')
}
const configuracao = document.querySelector(".configuracao")
configuracao.onclick = function() {
 janelaconfiguracao.style.display = 'block'
}
const fecharconfiguracao = document.querySelector(".fecharconfiguracao")
fecharconfiguracao.onclick = function() {
 janelaconfiguracao.style.display = 'none'
}
