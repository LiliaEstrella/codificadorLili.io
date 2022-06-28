var entrada=document.querySelector("input");
var texto;
var boton=document.querySelector("#encriptar");
var boton2=document.querySelector("#desencriptar");
var mensaje=document.querySelector("#areaTexto");
//almaceno las vocales y el cifrado en array para cambiarlo si se necesita despues
var vocalesEncriptadas=["ai","enter","aimas","ober","ufat" ]
var vocalesDesencriptadas=["a","e", "i","o","u" ]
var form1=document.querySelector("#form1");
var letra;

boton.addEventListener("click", function(event){

    var array=[];//este array se tiene que inciar cada vez que se llame a la función para que no se vuelvan a almacenar datos en el
    event.preventDefault();
    
    texto=entrada.value;//se extrae el valor que esté en el input
if(!validarMayusculas(texto)){
    for(let i=0;i<texto.length;i++){
    letra=texto[i];//lo que haya en la posicion del texto se almacena en una variable para no perderla

    switch(letra){
       case vocalesDesencriptadas[0]:
           letra=vocalesEncriptadas[0];
        array[i]=letra;break;
      case vocalesDesencriptadas[1]:
           letra=vocalesEncriptadas[1];
         array[i]=letra;break;

      case vocalesDesencriptadas[2]:
           letra=vocalesEncriptadas[2];
           array[i]=letra;break;

      case vocalesDesencriptadas[3]:
           letra=vocalesEncriptadas[3];
      array[i]=letra;break;

    case vocalesDesencriptadas[4]:
    letra=vocalesEncriptadas[4];
    array[i]=letra;break;

    default: 
    array[i]=letra;break;
    form1.reset();

}

}}else{
    mensajedeCopiado("No debe de haber mayúsculas en tu texto, intenta escribiendo sólo minúsculas");
}
    array=array.join("");
    mensaje.value=array;
    console.log(array);
    });

    //funcionalidad para el boton desencriptar 
boton2.addEventListener("click", function(event){
event.preventDefault();
texto=entrada.value;
if(!validarMayusculas(texto)){

texto= texto.replace(/enter/ig,vocalesDesencriptadas[1]);
texto= texto.replace(/aimas/ig,vocalesDesencriptadas[2]);
texto=texto.replace(/ober/ig,vocalesDesencriptadas[3]);
texto= texto.replace(/ufat/ig,vocalesDesencriptadas[4]);
texto=texto.replace(/ai/ig,vocalesDesencriptadas[0]);

mensaje.value=texto;}else{  //poner algo creativo para indicar que sin mayusculas
}
console.log(texto);

});


