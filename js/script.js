function textoSalida() {
    let texto = document.getElementById("first").value;
    let salida = document.getElementById("second");
    ocultarImagen();

    if (texto.trim() === "") {
        alert("No ingresó ningún texto para desencriptar.");
    } else {
        let comprobado = comprobarTexto(texto);
        if (comprobado) {
            let resultadoTexto = desencriptarTexto(texto);
            salida.value = resultadoTexto;
        } else {
            alert("No debe ingresar mayúsculas, números o caracteres especiales.");
        }
    }
}

function copiarTexto() {
    let texto = document.getElementById("second").value;

    // Copiar texto al portapapeles.
    navigator.clipboard
        .writeText(texto)
        .then(() => {
            if (texto.trim() === "") {
                alert("No se encontró algún texto para copiar.");
            }
        })
        .catch((error) => {
            alert("Error al copiar el texto:", error);
        });
}


function comprobarTexto(texto) {

    const pattern = new RegExp(/^[a-z\s]+$/g);
    
    return pattern.test(texto);
}

function ocultarImagen() {
    document.getElementById("second").style.backgroundImage  = "none";
}

function textoEntrada() {
    let texto = document.getElementById("first").value;
    let salida = document.getElementById("second");
    ocultarImagen();

    if (texto.trim() === "") {
        alert("No ingresó ningún texto para encriptar.");
    }
    else {
        let comprobado = comprobarTexto(texto);
        if (comprobado) {
            let resultadoTexto = encriptarTexto(texto);
            salida.value = resultadoTexto;
        } else {
            alert("No debe ingresar números o caracteres especiales.");
        }
    }
}



function encriptarTexto(texto) {
  
    let regTextEncript = texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    return regTextEncript;
}

function desencriptarTexto(texto) {
   
    let regTextDecript = texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    return regTextDecript;
}
