$(document).ready(function() {
  
    
  $("#Baires").click(function() {
    
      var idBoton = $("#Baires").attr("id");
      $(".detalles").hide();  
      $("#detalles" + idBoton).toggle();
    });

    $("#MachuPicchu").click(function() {
      var idBoton = $("#MachuPicchu").attr("id");
      $(".detalles").hide();  
      $("#detalles" + idBoton).toggle();
    });

    $("#Rio").click(function() {
      var idBoton = $("#Rio").attr("id");
       $(".detalles").hide();  
       $("#detalles" + idBoton).toggle();
    });

    $(".btn-close").click(function() {
        $(".detalles").hide();
    });
  });