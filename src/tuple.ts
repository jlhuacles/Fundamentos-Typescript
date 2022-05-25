export{};


let user: [number, string];
user = [1, 'luchito'];

console.log('user', user);
console.log('username', user[1]);
console.log('username.length', user[1].length);


//Tuplas con varios valores
// id, username, isPro
let userInfo: [number,string, boolean];
userInfo = [2, 'paparrazzi', true];
console.log('userInfo',userInfo);



//Array de tuplas con varios

let array: [number,string][] = [];

array.push([1, "JL"]);
array.push([2, 'JM']);
array.push([3, 'lensQueen']);
console.log('array', array);


//Funciones de elementos array de tuplas --> lensQueen001
array[2][1] = array[2][1].concat('001'); // se asigna porque se crea un nuevo array apartir de él