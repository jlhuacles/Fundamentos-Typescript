"use strict";
//Orientacion para Fotografías
// const landscape = 0;
// const portrait = 1;
// const square = 2;
// const panorama = 3;
var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation[PhotoOrientation["Landscape"] = 0] = "Landscape";
    PhotoOrientation[PhotoOrientation["Portrait"] = 1] = "Portrait";
    PhotoOrientation[PhotoOrientation["Square"] = 2] = "Square";
    PhotoOrientation[PhotoOrientation["Panorama"] = 3] = "Panorama";
})(PhotoOrientation || (PhotoOrientation = {}));
const landscape = PhotoOrientation.Landscape;
console.log(landscape);
console.log(PhotoOrientation[0]);
var CameraOrientation;
(function (CameraOrientation) {
    CameraOrientation[CameraOrientation["Landscape"] = 11] = "Landscape";
    CameraOrientation[CameraOrientation["Portrait"] = 12] = "Portrait";
    CameraOrientation[CameraOrientation["Square"] = 13] = "Square";
    CameraOrientation[CameraOrientation["Panorama"] = 14] = "Panorama";
})(CameraOrientation || (CameraOrientation = {}));
console.log('CameraOrientation', CameraOrientation[11]);
console.log(CameraOrientation['Landscape']);
var Country;
(function (Country) {
    Country["bolivia"] = "Bol";
    Country["Colombia"] = "Col";
    Country["Mexico"] = "Mex";
    Country["EEUU"] = "Usa";
})(Country || (Country = {}));
const countryNow = Country.Colombia;
console.log(countryNow);
