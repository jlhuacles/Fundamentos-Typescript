"use strict";
//Corchetes
//Tipo Explicito
let users;
users = ['Jl', 'Queen', 'Kine'];
// users = [1, 3, 4,  true];
//Inferido
let otherUsers = ['Jl', 'Kine'];
// otherUsers =['Jl', 'Queen', 1];
//Array<tipo>
let pictureTitles;
pictureTitles = ['Favorite Music', 'Wedding', 'Landscape'];
//Acceder a un valor de un array de
console.log('First user', users[0]);
console.log('First Title: ', pictureTitles[1]);
//propiedades en arrays
console.log('users.length', users.length);
//Funciones en arreglos como js
users.push('JM');
users.sort();
console.log('users', users);
