// void es lo opuesto de any, ausencia de valor
// se usa para funciones


//Tipo explicito
function showInfo(user: any): void{
    console.log('User info', user.id,user.username,user.firstName);
    
}

showInfo({id:1, username:'jl',firstName:'Huacles'});


//Tipo inferidos 
function showFormattedInfo(user: any){
    console.log('User info', `
        id: ${user.id}
        username: ${user.username}
        firstname: ${user.firstName}
    `);
}

showFormattedInfo({id:1, username:'jl',firstName:'Huacles'});

//Tipo void como tipo de una variable

let unusable: void;
// unusable = null;
unusable = undefined;




// Tipo Never
function handlerError(code: number, message: string): never{
    //Proccess

    //Message con la respuesta
    throw new Error(`${message}. Code: ${code} `);


}
try{
    handlerError(404, 'Not Found');
}catch(error){

}


//----------------------------------------------------------------
function sumnum(limit: number): never {
    let sum = 0;
    while(true){
        sum++;
    }
}//REturn nunca se retornará la suma acumulada

