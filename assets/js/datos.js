$(document).ready(function(){

$(document).on('keypress', '#datos-nombre', function (event) {
    let regex = new RegExp("^[a-zA-Z ]+$");
    let key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});
//solo acepta letras numeros @ y .
$(document).on('keypress', '#datos-email', function (event) {
    let regex = new RegExp("^[a-z0-9@.]+$");
    let key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});
$("#error1").hide();
$("#error2").hide();
$("#error3").hide();
$(".boton-datos").on("click", function(e){
    let nombre = $("#datos-nombre").val();
    let email = $("#datos-email").val();
    if(nombre == ""){
        $("#error1").show();
    }else{
        $("#error1").hide();
    }
    if(email.indexOf('@') == -1){
        $("#error2").show();
    }else{
        $("#error2").hide();
    }
    
    if($("#check-datos").prop('checked') == false){
        $("#error3").show();
    }else{
        $("#error3").hide();
    }

    if(nombre != "" && email.indexOf('@') != -1 && $('#check-datos').is(':checked')){
        localStorage.setItem("nombre apellido", nombre);
        localStorage.setItem("email", email);
    }else{
        e.preventDefault();
    }
});
});