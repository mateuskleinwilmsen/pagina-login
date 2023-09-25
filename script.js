function telaEntrar(){
    let divAviso = document.getElementById("aviso");
    let divCriarConta = document.getElementById("criar-conta");
    let width = window.outerWidth;

    if(width<768){
        divAviso.style.left = "-100%";
    }else{divAviso.style.left = "-50%";}
    divCriarConta.style.zIndex = "0";
}

function telaCriar(){
    let divAviso = document.getElementById("aviso");
    let divCriarConta = document.getElementById("criar-conta");
    let width = window.outerWidth;

    if(width<768){
        divAviso.style.left = "0%";
    }else{divAviso.style.left = "50%";}
    divCriarConta.style.zIndex = "2";
}

//função que é executada toda vez que a tela muda de tamanho
function displayWindowSize(){
    let divAviso = document.getElementById("aviso");
    let divCriarConta = document.getElementById("criar-conta");
    let width = window.outerWidth;
    
    if(width<768){
        divAviso.style.left = "0%";
    }else{
        divAviso.style.left = "50%";
    }
    divCriarConta.style.zIndex = "2";
}
    
//evento que chama a função quando a tela muda de tamanho
window.addEventListener("resize", displayWindowSize);

displayWindowSize();