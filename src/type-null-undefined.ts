let nullVariable: null;
nullVariable = null;
// nullVariable = 'casa'; error

let otherVariable = null;
otherVariable = null;

console.log('nullVariable', nullVariable);

console.log('otherVariable', otherVariable);


// undefined type

let undefinedType: undefined = undefined;
// undefinedType ='test'; error

let otherUndefinedtype = undefined;
otherUndefinedtype = 'casa';


console.log('undefinedType', undefinedType);
console.log('otherUndefinedType', otherUndefinedtype);


//subtipos del tipo any
//uso como subtipos del tipo undefined
//--strictNullChecks
let albumName: string;
// albumName = null;
// albumName = undefined;