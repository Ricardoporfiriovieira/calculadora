let front = ''
let tela = window.document.getElementById('tela')

function apaga(){

    front = ''
    tela = window.document.getElementById('tela')

    tela.innerHTML = front
}

function clicou1(elemento){

    front += elemento 
    tela.innerHTML = front
    
}

function parentese1(){

    front += '('
    tela.innerHTML = front

}

function parentese2(){

    front += ')'
    tela.innerHTML = front

}

function resultado(){
    tela.innerHTML = eval(front)

    front = ''
}