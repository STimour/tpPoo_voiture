"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Voiture = void 0;
class Voiture {
    constructor(_marque, _model, _immat, _couleur, _km, _prix, _anImmat) {
        this._marque = _marque;
        this._model = _model;
        this._immat = _immat;
        this._couleur = _couleur;
        this._km = _km;
        this._prix = _prix;
        this._anImmat = _anImmat;
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
}
exports.Voiture = Voiture;
