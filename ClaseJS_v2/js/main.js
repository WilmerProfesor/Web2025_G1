
let in_A= document.getElementById("in_A");
let in_B= document.getElementById("in_B");
let salida= document.getElementById("out");
let boton= document.getElementById("boton");

boton.addEventListener("click",()=>{
    salida.value= Number(in_A.value) + Number(in_B.value);
})

let funcionSuma=function(){
    salida.value= Number(in_A.value) + Number(in_B.value);
}
