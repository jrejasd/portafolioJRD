
$(document).ready(function () {
  
    //
    $('#btnEnviar').click(function () { 
        const nombre = $("#nombre").val();    
        const apellido = $("#apellido").val();    
        const telefono = $("#telefono").val();    
        const correo = $("#correo").val();    
   /*      console.log(nombre);
        console.log(apellido);
        console.log(telefono);
        console.log(correo); */
        if(nombre == "" || apellido == "" || telefono == "" || correo ==""){
            alert("Por favor, complete todos los campos");
        } else{
            alert("Datos enviados satisfactoriamente");
        }
        
        
    });    
});