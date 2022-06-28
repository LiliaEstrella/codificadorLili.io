
var botonCopy=document.getElementById("copiar");
botonCopy.addEventListener("click", function(event){
event.preventDefault();
mensajedeCopiado("Tu mensaje ha sido copiado");
   var areaText=document.querySelector("textarea");
var contenidoArea=areaText.value;
var input=document.querySelector("input");
input.value=contenidoArea;

});

function mensajedeCopiado(dialogo){
   
   var mensaje=document.createElement("h3");
   mensaje.textContent=dialogo;
   var cuerpo=document.querySelector("body");
   console.log(mensaje);
   cuerpo.appendChild(mensaje);
   setTimeout(function(){mensaje.classList.add("desaparecer");}, 2000);
}