"use strict";
console.log('hola, Platzi World');
//Number 
//Explicito
let phone;
phone = 1;
phone = 221222;
//Inferido
let phoneNumber = 1212;
//phoneNumber = 'casa'; es un error porque está explicito el valor anteriormente
let hex = 0xf12; //para hexa para
let binary = 0b01001;
let octal = 0o744;
// Boolean
let verdadero;
verdadero = true;
//verdadero = 1;
let falso = false;
//String, se pueden usar comillas dobles o simples "" '' para
let nombre;
nombre = "Jose luis";
//Template String
//Usaremos `` back-tick
let userInfo;
userInfo = `somos los mejores es cierto, ${hex}
    User info: ${nombre}

`;
console.log(userInfo);
