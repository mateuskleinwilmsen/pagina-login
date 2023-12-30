function telaEntrar(){
    let divAviso = document.getElementById("aviso");
    let divCriarConta = document.getElementById("criar-conta");
    let criarEmail = document.getElementById("criarEmail");
    let criarSenha = document.getElementById("criarSenha");
    let width = window.innerWidth;

    if(width<768){
        divAviso.style.left = "-100%";
    }else{divAviso.style.left = "-50%";}
    divCriarConta.style.zIndex = "0";

    //limpando informações da opção de login anterior
    criarEmail.value = "";
    criarSenha.value = "";
}

function telaCriar(){
    let divAviso = document.getElementById("aviso");
    let divCriarConta = document.getElementById("criar-conta");
    let entrarEmail = document.getElementById("entrarEmail");
    let entrarSenha = document.getElementById("entrarSenha");
    let width = window.innerWidth;

    if(width<768){
        divAviso.style.left = "0%";
    }else{divAviso.style.left = "50%";}
    divCriarConta.style.zIndex = "2";
    //limpando informações da opção de login anterior
    entrarEmail.value = "";
    entrarSenha.value = "";
}

//função que é executada toda vez que a tela muda de tamanho
function displayWindowSize(){
    let divAviso = document.getElementById("aviso");
    let divCriarConta = document.getElementById("criar-conta");
    let width = window.innerWidth;

    if(width<=768){
        if(divAviso.style.left == "50%"){
            divAviso.style.left = "0%";
        }
        else if(divAviso.style.left == "-50%"){
            divAviso.style.left = "-100%";
        }
    }else{
        if(divAviso.style.left == "0%"){
            divAviso.style.left = "50%";
        }
        else if(divAviso.style.left == "-100%"){
            divAviso.style.left = "-50%";
        }
    }
}
    
//evento que chama a função quando a tela muda de tamanho
window.addEventListener("resize", displayWindowSize);

displayWindowSize();