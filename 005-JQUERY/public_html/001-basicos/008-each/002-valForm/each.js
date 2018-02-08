
$("form input").focusin(function(){
    $(this).removeClass("error");
});

function validar(){
    //Añadir clase al input que no contenga texto
    $("form input").each(function(i,item){
        if( $(item).val().length === 0 ){
            $(item).addClass("error");
        }
    });
    
    //Validación del email -> ¿contiene @?
    if($("input[name='email']").val().indexOf("@") === -1 ){
        $("input[name='email']").addClass("error");
        $("#txt_error").html("El email no es correcto");
    }else{
        $("#txt_error").html("todos los campos son onbligatorios");
    }
    
    //Aparecer mensajes
    if( $("form input").hasClass("error")  ){
        $("#txt_error").fadeIn(1000).delay(1000).fadeOut(1000);
    }else{
         $("#txt_confirm").fadeIn(1000).delay(1000).fadeOut(1000);
    }
    
}


