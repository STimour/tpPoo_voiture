"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Garage = void 0;
class Garage {
    constructor(_nom, _listeVoiture = [], _listeMoto = [], _listeCamion = []) {
        this._listeVoiture = [];
        this._listeMoto = [];
        this._listeCamion = [];
        this._nom = _nom;
        this._listeVoiture = _listeVoiture;
        this._listeMoto = _listeMoto;
        this._listeCamion = _listeCamion;
    }
    voitureMoinsCher(envie) {
        let voitureM = this._listeVoiture[0];
        if (envie === "moins chere") {
            for (const voiture of this._listeVoiture) {
                if (voiture.prix < voitureM.prix) {
                    voitureM = voiture;
                }
            }
            console.log(`La voiture la moins chère est ${voitureM.marque} ${voitureM.model} avec un prix de ${voitureM.prix} euros.`);
        }
        return voitureM;
    }
    couleurVoiture(couleurVoulu) {
        let voituresDeCouleur = [];
        for (const voiture of this._listeVoiture) {
            if (voiture.couleur === couleurVoulu) {
                voituresDeCouleur.push(voiture);
            }
        }
        console.log(`Les voiture de la couleur ${couleurVoulu} en stock sont les suivante: `);
        const infosVoitures = voituresDeCouleur.map(voiture => {
            return `${voiture.marque} ${voiture.model}, ${voiture.couleur}, Année: ${voiture.anImmat}, Prix: ${voiture.prix} euros`;
        });
        console.log(infosVoitures);
        return voituresDeCouleur;
    }
    getTypeVehicule(typeVehicule) {
        let voiture = [];
        let moto = [];
        let camion = [];
        if (typeVehicule === "voiture") {
            console.log(this._listeVoiture);
        }
        else if (typeVehicule === "moto") {
            console.log(this._listeMoto);
        }
        else if (typeVehicule === "camion") {
            console.log(this._listeCamion);
        }
        else {
            console.log("type de véhicule n'est pas present");
        }
    }
    ajoutVoiture(voitures) {
        this._listeVoiture.push(voitures);
    }
    ajoutMoto(motos) {
        this._listeMoto.push(motos);
    }
    ajoutCamion(camions) {
        this._listeCamion.push(camions);
    }
    get nom() {
        return this._nom;
    }
    get listeVoiture() {
        return this._listeVoiture;
    }
    get listeMoto() {
        return this._listeMoto;
    }
    get listeCamion() {
        return this._listeCamion;
    }
    set listeVoiture(voitures) {
        this._listeVoiture = this.listeVoiture;
    }
    set listeMoto(motos) {
        this._listeMoto = this.listeMoto;
    }
    set listeCamion(camions) {
        this._listeCamion = this.listeCamion;
    }
}
exports.Garage = Garage;
