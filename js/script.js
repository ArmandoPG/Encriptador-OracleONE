
const matriz_letras = [
    ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', ' '],
    ['n', 'm', 's', 'q', 't', 'g', 'j', 'r', 'v', 'y', 'e', 'z', 'i', 'u', 'h', 'p', 'b', 'c', 'k', 'd', 'l', 'x', 'f', 'a', 'o', 'w', '-']
];

function copiar(id_elemento) {
    var aux = document.createElement("input");
    aux.setAttribute("value", document.getElementById(id_elemento).innerHTML);
    document.body.appendChild(aux);
    aux.select();
    document.execCommand("copy");
    document.body.removeChild(aux);
  }

function Encriptar() {

    // const matriz_letras = [
    //     ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', ' '],
    //     ['n', 'm', 's', 'q', 't', 'g', 'j', 'r', 'v', 'y', 'e', 'z', 'i', 'u', 'h', 'p', 'b', 'c', 'k', 'd', 'l', 'x', 'f', 'a', 'o', 'w', '-']
    // ];

    var textoEncriptado="";
    var textarea = document.getElementById("texto-id");
    var texto = textarea.value;

    var array_texto = texto.split("");


    for (var i = 0; i < array_texto.length; i++) {

        for(var j = 0; j < matriz_letras[0].length; j++){
            if(array_texto[i] === matriz_letras[0][j]){
                textoEncriptado += matriz_letras[1][j];
                break;
            }
        }
    }
    // alert(textoEncriptado);

    document.getElementById("respuesta").innerHTML = "Texto encriptado:";
    document.getElementById("respuesta-p").innerHTML = textoEncriptado;
    document.getElementById("texto-id").value = "";

    // document.getElementById("copiar-resp").innerHTML = <button onclick="copiar()">Copiar</button>;

}

function Desencriptar() {

    // const matriz_letras = [        ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', ' '],
    //     ['n', 'm', 's', 'q', 't', 'g', 'j', 'r', 'v', 'y', 'e', 'z', 'i', 'u', 'h', 'p', 'b', 'c', 'k', 'd', 'l', 'x', 'f', 'a', 'o', 'w', '-']
    // ];

    var textarea = document.getElementById("texto-id");
    var textoEncriptado = textarea.value;

    var array_texto = textoEncriptado.split("");
    var textoDesencriptado = "";

    for (var i = 0; i < array_texto.length; i++) {

        for (var j = 0; j < matriz_letras[0].length; j++) {

            if (array_texto[i] === matriz_letras[1][j]) {
                textoDesencriptado += matriz_letras[0][j];
                break;
            } else if (j === matriz_letras[0].length - 1) {
                textoDesencriptado += array_texto[i];
            }

        }
    }
    document.getElementById("respuesta").innerHTML = "Texto Desencriptado:";
    document.getElementById("respuesta-p").innerHTML = textoDesencriptado;
    //limpiar textarea
    document.getElementById("texto-id").value = "";
}

  
  


