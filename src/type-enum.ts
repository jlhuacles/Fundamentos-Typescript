//Orientacion para Fotografías
// const landscape = 0;
// const portrait = 1;
// const square = 2;
// const panorama = 3;

enum PhotoOrientation {
    Landscape = 0,
    Portrait = 1,
    Square = 2,
    Panorama =3
}

const landscape: PhotoOrientation = PhotoOrientation.Landscape;

console.log(landscape);
console.log(PhotoOrientation[0]);


enum  CameraOrientation {
    Landscape = 11,
    Portrait ,
    Square ,
    Panorama 
}

console.log('CameraOrientation',CameraOrientation[11]);
console.log(CameraOrientation['Landscape']);


enum Country{
    bolivia = 'Bol',
    Colombia = "Col",
    Mexico = "Mex",
    EEUU = "Usa"
}

const countryNow: Country = Country.Colombia;
console.log(countryNow);