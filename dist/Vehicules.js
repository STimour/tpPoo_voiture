"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vehicule = exports.TypeVehicule = void 0;
var TypeVehicule;
(function (TypeVehicule) {
    TypeVehicule[TypeVehicule["Camion"] = 0] = "Camion";
    TypeVehicule[TypeVehicule["Voiture"] = 1] = "Voiture";
    TypeVehicule[TypeVehicule["Moto"] = 2] = "Moto";
})(TypeVehicule || (exports.TypeVehicule = TypeVehicule = {}));
class Vehicule {
    constructor(_marque, _model, _immat, _couleur, _km, _prix, _anImmat, _type) {
        this._marque = _marque;
        this._model = _model;
        this._immat = _immat;
        this._couleur = _couleur;
        this._km = _km;
        this._prix = _prix;
        this._anImmat = _anImmat;
        this._type = _type;
    }
    get marque() {
        return this._marque;
    }
    get model() {
        return this._model;
    }
    get immat() {
        return this._immat;
    }
    get couleur() {
        return this._couleur;
    }
    get km() {
        return this._km;
    }
    get prix() {
        return this._prix;
    }
    get anImmat() {
        return this._anImmat;
    }
    get type() {
        return this._type;
    }
    set marque(marque) {
        this._marque = marque;
    }
    set model(model) {
        this._model = model;
    }
    set immat(immat) {
        this._immat = immat;
    }
    set couleur(couleur) {
        this._couleur = couleur;
    }
    set km(km) {
        this._km = km;
    }
    set prix(prix) {
        this._prix = prix;
    }
    set anImmat(anImmat) {
        this._anImmat = anImmat;
    }
    set type(type) {
        this._type = type;
    }
}
exports.Vehicule = Vehicule;
