//ejercicio 0

    function capitalize(word) {
        console.log(word[0].toUpperCase() + word.slice(1));
    }

capitalize('casa');

//ejercicio 1

function buscar(s){
    grande= ""
    texto = s.replace(","," ").split(" ");
    texto.forEach(function (texto){
        if(texto.length > grande.length){
            grande = texto
        };
    });
    return grande
};
console.log(buscar("INTRODUCCIÓN AL JAVASCRIPT BÁSICO"));

//ejercicio 2

function par(n){
    if(n%2 === 0)
    {
     par(console.log("Par:",n));
    } else if (n%2 === 1){
        par(console.log("Impar:",n));
    }
}
par(3);

//ejercicio 3

function buscaCorta(s) {
    palabraCorta = s;
    palabras = s.replace(",", " ").split(" ");
    palabras.forEach(function (palabra) {
        if (palabra.length < palabraCorta.length) {
            palabraCorta = palabra
        };
    });
    return palabraCorta
};
console.log(buscaCorta("Quiero la palabra mas corta"));

//ejercicio 4

function deletreo(s){
    palabra = " ";
    for(conteo = 0; conteo < s.split('').length; conteo++ );
    console.log("Vocales:",conteo)
} 
deletreo("mandarinas");

//ejercicio 5

function miles_separador(numero) {
    console.log(numero.toLocaleString());
}

miles_separador(5456.6);