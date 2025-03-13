// alert("Este es el equivalente a JOptionPane.showMessageDialog");
// let variable= prompt("Este es el equivalente a JOptionPane.showInputDialog");
// console.log("Este es el equivalente a un sout")

//-------------------------------------------------------
// let variable1=5;
// let variable2="5";
// let variable3=true;
// let variable4=5.5;

// console.log(typeof(variable1)+variable1);
// console.log(typeof(variable2)+variable2);
// console.log(typeof(variable3)+variable3);
// console.log(typeof(variable4)+variable4);
//-------------------------------------------------------
// let variable="'Hola mundo'"
// let variable2='"Hola mundo"'
// let x=5;
// console.log(variable);
// console.log(variable2);
// console.log(`esto es lo que imprimo ${variable}`);
// console.log(`Esto hace hasta operaciones ${x+x} embebidas`);
//-------------------------------------------------------

// let x=5;
// let y="5";

// console.log(x==y);
// console.log(x===y);
//-------------------------------------------------------

// if(true){

// }
// // ********

// if(true){

// }else{
    
// }
// // ********

// if(true){

// }else if(false){

// }
// // ********

// while(true){

// }
// // ********

// do{

// }while(true)
// // ********

// for (let i = 0; i < 10; i++) {
//     console.log(i);    
// }

// ******* 

// const arreglo=[1,2,3,true,false,4.5,{nombre:"juan",edad:18},["a","b","c"]];
// console.log(arreglo);

// const objeto={nombre: "Wilmer", apellido:"Patiño", edad:45}
// console.log(objeto);
// console.log("---FOR OF para recorrer arreglos-----");
// for (const element of arreglo) {
//     console.log(element);    
// }
// console.log("---FOR IN para recorrer objetos-----");
// for (const key in objeto) {
//     console.log(key+": "+objeto[key]);
// }


// EJERCICIO
// Preguntar a un estudiante si desea agregar una nueva nota.
// Al leer una nueva nota se debe RECALCULAR y MOSTRAR 
// el promedio del curso.
// Repetir la acción hasta que se indique que no se desean 
// agregar mas notas


//<<<<<< Funciones  >>>>>>>>

function suma(x, y) {
    return x+y;
}
console.log(suma(4,5));

//<<<<<< Funciones Anónimas  >>>>>>>>

const resta= function(x, y) {
    return x-y;
}
console.log(resta(5,3));


//<<<<<< Funciones Flecha (ArrowFuncions)  >>>>>>>>

// ()=>{}
// var=>{}
// (var1, var2)=>{}
// (var1, var2)=>{
//     line1;
//     line2;
//     line...;
// }
// ()=>retunr hfdksf;

const multiplicacion_v1= (a, b)=>{return a*b};
const multiplicacion_v2= (a, b)=>a*b;
const multiplicacionTabla7_v1= a =>a*7;
const multiplicacionTabla7_v2= (a) =>{return a*7};
const multiplicacionTabla7_v3= (a) =>{
    let res=0;
    for (let i = 1; i <= a; i++) {
        res+=7;        
    }
    return res;
}
const tablaDel3=()=>{
    for (let i = 1; i < 11; i++) {
        console.log(3+" x "+i+" = "+3*i);        
    }
}


console.log(multiplicacion_v1(4,3));
console.log(multiplicacion_v2(5,4));
console.log(multiplicacionTabla7_v1(3));
console.log(multiplicacionTabla7_v2(3));
console.log(multiplicacionTabla7_v3(3));
console.log(tablaDel3());

