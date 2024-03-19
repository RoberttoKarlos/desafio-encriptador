function encriptarFrase() {
  //Asignamos el texto ingresado
  let fraseOriginal = document.getElementById("fraseOriginal").value;

  //Aplicamos la encriptación
  fraseProcesada = fraseOriginal
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");

    cambioSectionResultado(fraseProcesada);
    cambiarClase();
}

function desencriptarFrase() {
  //Asignamos el texto ingresado y lo modificamos según lo indicado
  let fraseOriginal = document.getElementById("fraseOriginal").value;

  //Aplicamos la desencriptación
  fraseProcesada = fraseOriginal
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");

  cambioSectionResultado(fraseProcesada);
  cambiarClase();
}

 //Cambiamos la section con id "seccion-resultado" para mostrar el texto desencriptado y acomodar el diseño.
function cambioSectionResultado(fraseProcesada){
    let elementoHTMLResultado = document.getElementById("seccion-resultado");
    elementoHTMLResultado.innerHTML = '<p class="resultado" id="resultado">' + fraseProcesada + '</p><button class="boton-copiar" type="button" onclick="copiarTexto()">Copiar</button>';
}

function cambiarClase(clase){
    let elementoHTML = document.getElementById("seccion-resultado");
    elementoHTML.className = "texto-resultado-nuevo";
}


function copiarTexto() {
    //Se selecciona el elemento a copiar
    let textoACopiar = document.getElementById("resultado");
    //Se crea un textarea temporal para asignar el texto a copiar
    let elementoTemporal = document.createElement("textarea");
    elementoTemporal.value = textoACopiar.innerText;
    //Se agrega el textarea temporal al documento 
    document.body.appendChild(elementoTemporal);
    //Se selecciona el elemento a copiar
    elementoTemporal.select();
    //Se ejecuta el comando "copiar"
    document.execCommand("copy");
    //Se elimina el textarea temporal del documento 
    document.body.removeChild(elementoTemporal);
}