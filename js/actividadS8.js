
function validarIcono(id, validar) {
    let icono = $(id).children();
    if (validar) {
      icono.addClass("fa-check text-success");
      icono.removeClass("fa-times text-danger");
    } else {
      icono.addClass("fa-times text-danger");
      icono.removeClass("fa-check text-success");
    }
  }

function validarUsuario(){
    $("#usuarioValido").removeClass("d-none");
    let user = $("#txtUsuario").val();
    let expRegUser = /^[a-zA-Z0-9\_\-]{4,16}$/;

    if(!expRegUser.test(user)){
        $("#errorUsuario").html("El usuario tiene que ser de 4 a 16 dígitos y solo puede contener numeros, letras y guion bajo.");
        validarIcono("#usuarioValido", false);
        return false;
    }else{
        $("#errorUsuario").html("");
        validarIcono("#usuarioValido", true);
        return true;
    }
}

function validarNombre(){
    $("#nombreValido").removeClass("d-none");
    let nom = $("#txtNombre").val();
    let expRegNom = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;

    if(nom == "" || !expRegNom.test(nom)){
        $("#errorNombre").html("El nombre debe contener letras y no dejar vacío.");
        validarIcono("#nombreValido", false);
        return false;
    }else{
        $("#errorNombre").html("");
        validarIcono("#nombreValido", true)
        return true;
    }
}

function validarPasswords(){
    $("#passwordValido").removeClass("d-none");
    $("#password2Valido").removeClass("d-none");
    let passw = $("#password").val();
    let passw2 = $("#password2").val();
    let expRegPassword = /^.{4,12}$/;
    
    if(passw.length == 0 || passw2.length == 0){
        if(passw.length == 0 || !expRegPassword.test(passw)){
        $("#errorPassword").html("La contraseña tiene que ser de 4 a 12 dígitos.");
       validarIcono("#passwordValido", false);
        return false;
    }else{
        $("#errorPassword").html("");
        validarIcono("#passwordValido", true);
    }
}
    if(passw === passw2){
        $("#errorPassword2").html("");
        validarIcono("#password", true);
        validarIcono("#password2Valido", true);
        return true;

    }else if(passw2.length == 0 || !expRegPassword.test(passw2)){
        validarIcono("#password2Valido", false);
        return false;

    }else{
        $("#errorPassword2").html("Ambas contraseñas deben ser iguales.");
        validarIcono("#password2Valido", false);
        validarIcono("#errorPassword2", false);
        return false;
    }
 }

function validarCorreo(){
    $("#correoValido").removeClass("d-none");
    let icorreo = $("#txtCorreo").val();
    let expRegEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    
    if(!expRegEmail.test(icorreo)){
        $("#errorCorreo").html("El correo solo puede contener letras, numeros, puntos, guiones y guion bajo.");
        validarIcono("#correoValido", false);
        return false;
    }else{
        $("#errorCorreo").html("");
        validarIcono("#correoValido", true);
        return true;
    }
}

function validarTelefono(){
    $("#telefonoValido").removeClass("d-none");
    let tel = $("#numTelefono").val();
    let expRegTelefono = /^\d{7,14}$/;

    if(!expRegTelefono.test(tel)){
        $("#errorTelefono").html("El telefono solo puede contener numeros y el maximo son 14 dígitos.");
        validarIcono("#telefonoValido", false);
        return false;
    }else{
        $("#errorTelefono").html("");
        validarIcono("#telefonoValido", true);
        return true;
    }
}

function validarFormulario(){
    let formUsuario = validarUsuario();
    let formNombre = validarNombre();
    let formPassword = validarPasswords();
    let formCorreo = validarCorreo();
    let formTelefono = validarTelefono();

    if(formUsuario && formNombre && formPassword && formCorreo && formTelefono && formAceptar){
        return true;
    }else{
        return false;
    }
}

$("#btnEnviar").click(function () {
    if (validarFormulario()) {
      $("#mensajeExito").removeClass("d-none");
    } else {
      $("#mensajeExito").addClass("d-none");
    }
  });

    $("#txtUsuario").on("input", validarUsuario);
    $("#txtNombre").on("input", validarNombre);
    $("#password").on("input", validarPasswords);
    $("#password2").on("input", validarPasswords);
    $("#txtCorreo").on("input", validarCorreo);
    $("#numTelefono").on("input", validarTelefono);
