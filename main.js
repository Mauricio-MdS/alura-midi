const listaDeTeclas = document.querySelectorAll('.tecla');

function tocaSom(som){
    const elementoBuscado = document.querySelector(som);

    if (elementoBuscado != null && elementoBuscado.localName === 'audio') {
        elementoBuscado.play();
    } else {
        console.log('Argumento inválido para a função tocaSom()');
    }
    
}

/*
Iterador que atribui os sons às teclas.
*/
for(let i = 0; i < listaDeTeclas.length; i++){
    listaDeTeclas[i].onclick= function(){

        //Passa como parametro para tocaSom o audio que está no indice 1 da lista de classes
        tocaSom(`#som_${listaDeTeclas[i].classList[1]}`);
    }

    // As duas funções abaixo servem para que se tenha o mesmo comportamento ao ativar pelo teclado
    listaDeTeclas[i].onkeydown = function(event){
        if (event.code === 'Enter' || event.code === 'Space'){
            listaDeTeclas[i].classList.add('ativa');
        }
    }

    listaDeTeclas[i].onkeyup = function(){
        listaDeTeclas[i].classList.remove('ativa');
    }
}
