function produtos(idElemento, lorem) {

    document.getElementById(idElemento).classList.add('rgb');
    document.getElementById(idElemento).setAttribute('onclick', `retorno('${idElemento}', '${lorem}')`);

}

function retorno(idElemento, lorem) {

    document.getElementById(idElemento).classList.remove('rgb');
    document.getElementById(idElemento).setAttribute('onclick', `produtos('${idElemento}', '${lorem}')`);

}