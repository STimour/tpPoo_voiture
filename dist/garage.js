"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Garage = void 0;
class Garage {
    constructor(_nom, _listeVoiture = []) {
        this._listeVoiture = [];
        this._nom = _nom;
        this._listeVoiture = _listeVoiture;
    }
    voitureMoinsCher() {
        let voitureM = this._listeVoiture[0];
        for (const voiture of this._listeVoiture) {
            if (voiture.prix < voitureM.prix) {
                voitureM = voiture;
            }
        }
        console.log(`La voiture la moins chère est ${voitureM.marque} ${voitureM.model} avec un prix de ${voitureM.prix} euros.`);
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
    ajoutVoiture(voiture) {
        this._listeVoiture.push(voiture);
    }
}
exports.Garage = Garage;
