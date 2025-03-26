//Funciones de Orden Superior

// UNa función especializada que retorna una función genérica

let mayorQue=(a,b)=>{return a>b}; 

let mayorQue10=(a)=>{return mayorQue(a,10)};
let mayorQue20=(a)=>{return mayorQue(a,20)};

console.log(mayorQue20(18));

// forEach

let arr=[1,2,3,4,5];

//forEach es una función que recorre un array y ejecuta una función en cada elemento
arr.forEach((elem)=>console.log(elem*elem));



//find devuelve el primer elemento que cumple la condición, si no hay ninguno devuelve undefined
let arrObj=[
    {nombre:"Juan",edad:20},
    {nombre:"Pedro",edad:20},
    {nombre:"Maria",edad:25}
];

let salida = arrObj.find((elem)=>elem.edad==20);
console.log(salida);


//filter devuelve un array con todos los elementos que cumplan la condición
let arrSalida = arrObj.filter((elem)=>elem.edad==20)
console.log(arrSalida);


//some devuelve true si al menos un elemento cumple la condición, false si no hay ninguno
salida = arrObj.some((elem)=>elem.edad==30);
console.log(salida);


//map devuelve un array con los elementos modificados por la función
arrObj.map((elem)=>elem.edad+=10);
console.log(arrObj);

//reduce devuelve un valor acumulado de los elementos del array
let sum=arr.reduce((acum,elem)=>acum+elem,0);
console.log(sum);

//sort ordena los elementos del array
console.log(arr.sort((a,b)=>a-b));
console.log(arr.sort((a,b)=>b-a));

//every devuelve true si todos los elementos cumplen la condición
salida = arrObj.every((elem)=>elem.edad<24);
console.log(salida);