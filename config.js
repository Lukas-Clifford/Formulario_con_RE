


function comprobarNombre(){
    let nombre = document.getElementById('nombre').value.trim();
    let reNombre = /^[A-Z][a-z]+ [A-Z][a-z]+$/;

    if (!reNombre.test(nombre)){
        document.getElementById('nombreMsgError')
            .style.visibility = 'visible';
        return false;
    }else{
        document.getElementById('nombreMsgError')
            .style.visibility = 'hidden';
        return true;
    }
}

//let nombre = document.getElementById('nombre');
//nombre.addEventListener('input',comprobarNombre);





function comprobarEdad(){
    let edad = document.getElementById('edad').value.trim();
    let reEdad = /^[1-9][0-9]$/;

    if (!reEdad.test(edad)){
        document.getElementById('edadMsgError')
            .style.visibility = 'visible';
        return false;
    }else{
        document.getElementById('edadMsgError')
            .style.visibility = 'hidden';
        return true;
    }
}

//let edad = document.getElementById('edad');
//edad.addEventListener('input',comprobarEdad);





function comprobarTelefono(){
    let telefono = document.getElementById('telefono').value.replace(' ','');
    let reTelefono = /^[0-9]{6}$/;

    if (!reTelefono.test(telefono)){
        document.getElementById('telefonoMsgError')
            .style.visibility = 'visible';
        return false;
    }else{
        document.getElementById('telefonoMsgError')
            .style.visibility = 'hidden';
        return true;
    }
}

//let telefono = document.getElementById('telefono');
//telefono.addEventListener('input',comprobarTelefono);






function comprobarEmail(){
    let email = document.getElementById('email').value.trim();
    let reEmail = /^[a-zA-Z0-9]+@(gmail|hotmail)\.com$/;

    if (!reEmail.test(email)){
        document.getElementById('emailMsgError')
            .style.visibility = 'visible';
        return false;
    }else{
        document.getElementById('emailMsgError')
            .style.visibility = 'hidden';
        return true;
    }

}

//let email = document.getElementById('email');
//email.addEventListener('input',comprobarEmail);






function comprobarContrasena(){
    let contrasena = document.getElementById('contraseña').value.trim();
    let reContrasena = /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!$%&@#]).{8}$/;
    let mensaje = document.getElementById('contraseñaMsgError');
    mensaje.style.visibility = 'visible';

    if (!reContrasena.test(contrasena)){
        if(contrasena.length < 8 && contrasena.length > 4){
            mensaje.textContent = "medio";
            mensaje.style.color = "orange";
        }else if (contrasena.length <= 4){
            mensaje.textContent = "debil";
            mensaje.style.color = "red";
        }else if(contrasena.length > 8){
            mensaje.textContent = "Debe ser 8 caracteres";
            mensaje.style.color = "red";
        }else{
            mensaje.innerHTML = "Debe contener una letra, numero <br> y caracter especial (!$%&@#) ";
            mensaje.style.color = "red";
        }
        return false;
    }else{
        mensaje.textContent = "Fuerte";
        mensaje.style.color = "lightgreen";
        return true;
    }

}

let contrasena = document.getElementById('contraseña');
contrasena.addEventListener('input',comprobarContrasena);





function comprobarAficion(){
    let aficionSelect = document.getElementById('aficion');
    let mensaje = document.getElementById('aficionMsgError');

    if(aficionSelect.value === ""){
        mensaje.style.visibility = 'visible';
        return false;
    }else{
        mensaje.style.visibility = 'hidden';
        return true;
    }
}


function comprobarTransporte(){
    let transporteSeleccionado = document.querySelector('input[name="transporte"]:checked');
    let mensaje = document.getElementById('transporteMsgError');

    if(!transporteSeleccionado){
        mensaje.style.visibility = 'visible';
        return false;
    }else{
        mensaje.style.visibility = 'hidden';
        return true;
    }
}




function comprobarAcuerdo(){
    let checkboxSeleccionado = document.getElementById('acuerdoPrivacidad').checked;
    let mensaje = document.getElementById('acuerdoMsgError');

    if(!checkboxSeleccionado){
        mensaje.style.visibility = 'visible';
        return false;
    }else{
        mensaje.style.visibility = 'hidden';
        return true;
    }
}




function enviar(){
    let comprobaciones =
        [comprobarNombre(),
        comprobarEdad(),
        comprobarTelefono(),
        comprobarEmail(),
        comprobarContrasena(),
        comprobarAficion(),
        comprobarTransporte(),
        comprobarAcuerdo()];

    if(!comprobaciones.includes(false)){
        document.getElementById('formulario').submit();
    }


}