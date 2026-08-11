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
const temaclaro = document.querySelector(".Claro");
const conteudo = document.querySelector(".conteudo");
const Titulodoblog = document.querySelector(".Titulodoblog");
const janelaconfiguracao = document.querySelector(".janelaconfiguracao")
const temaescuro = document.querySelector(".Escuro");
temaclaro.onclick = function() {
 conteudo.classList.add('temaclaro')
 Titulodoblog.classList.add('temaclaro')
 janelaconfiguracao.classList.add('temaclaro')
}

