$(document).ready(function() {
  function asignarEventos(li) {
    $(li).click(function() {
      $(this).css({
        "text-decoration": "line-through",
        "font-style": "italic"
      });
    });
    $(li).dblclick(function() {
      $(this).remove();
    });
  }

  // Eventos para los elementos iniciales
  $("#listaCompra li").each(function() {
    asignarEventos(this);
  });

  // Añadir nuevo elemento
  $("#anadirCompra").click(function() {
    var nuevoTexto = $("#compra").val().trim();
    if (nuevoTexto !== "") {
      var nuevoLi = $("<li></li>").text(nuevoTexto);
      asignarEventos(nuevoLi);
      $("#listaCompra").append(nuevoLi);
      $("#compra").val("");
    }
  });

  // Resetear lista
  $("#reset").click(function() {
    $("#listaCompra").empty();
  });
});