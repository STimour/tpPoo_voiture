import { TypeVehicule, Vehicule } from "./Vehicules";

export class Moto extends Vehicule{
    constructor(
        _marque: string,
        _model: string,
        _immat: string,
        _couleur: string,
        _km: number,
        _prix: number,
        _anImmat: number
   ){
       super(
       _marque, 
       _model,
       _immat,
       _couleur,
       _km,
       _prix,
       _anImmat,
       TypeVehicule.Moto
   )}
}