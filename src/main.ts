console.log('hola, Platzi World');


//Number 
//Explicito

let phone: number;

phone = 1;
phone = 221222;

//Inferido
let phoneNumber = 1212;
//phoneNumber = 'casa'; es un error porque está explicito el valor anteriormente

let hex: number = 0xf12; //para hexa para
let binary: number = 0b01001; 
let octal: number = 0o744;


// Boolean

let verdadero: boolean;
verdadero = true;
//verdadero = 1;
let falso = false;



//String, se pueden usar comillas dobles o simples "" '' para
let nombre : string;
nombre = "Jose luis";

//Template String
//Usaremos `` back-tick

let userInfo: string;

userInfo = `somos los mejores es cierto, ${hex}
    User info: ${nombre}

`;

console.log(userInfo);