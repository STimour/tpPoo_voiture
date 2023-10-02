"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Moto = void 0;
const Vehicules_1 = require("./Vehicules");
class Moto extends Vehicules_1.Vehicule {
    constructor(_marque, _model, _immat, _couleur, _km, _prix, _anImmat) {
        super(_marque, _model, _immat, _couleur, _km, _prix, _anImmat, Vehicules_1.TypeVehicule.Moto);
    }
}
exports.Moto = Moto;
