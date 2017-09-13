
$(document).ready(function(){	
$('select[name=selValue]').val(51);
$('.selectpicker').selectpicker('refresh');
var valor = $(".selectpicker").val();
$(".paises").val("+" + valor);

$(".selectpicker").on("change", function(){
	var valor = $(".selectpicker").val();
	$(".paises").val("+" + valor);
	$('.selectpicker').selectpicker('refresh');
	$(".number").val("");
});

//Botón Next guarda el numero de telefono en localstorage
$(".next-number").on("click", function(e){
	var tele = $('.paises').val() + $('.number').val();
	localStorage.setItem("telefono", tele);
});



});
