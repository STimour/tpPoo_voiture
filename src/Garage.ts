import { Camion } from "./Camion"
import { Moto } from "./Moto"
import { Vehicule } from "./Vehicules"
import { Voiture } from "./Voiture"

export class Garage{
    private _nom: string
    private _listeVoiture: Vehicule[] = [] 
    private _listeMoto: Moto[] = []
    private _listeCamion: Camion[] = []

    constructor(
        _nom: string, 
        _listeVoiture: Vehicule[] = [],
        _listeMoto: Moto[] = [],
        _listeCamion: Camion[] = []
        )
        { 
        this._nom = _nom
        this._listeVoiture = _listeVoiture
        this._listeMoto = _listeMoto
        this._listeCamion = _listeCamion
        }

    public voitureMoinsCher(envie: string): Voiture{      
        let voitureM = this._listeVoiture[0]
        if(envie === "moins chere"){

            for(const voiture of this._listeVoiture){
                if (voiture.prix < voitureM.prix){
                    voitureM = voiture
                }
            }
            console.log(`La voiture la moins chère est ${voitureM.marque} ${voitureM.model} avec un prix de ${voitureM.prix} euros.`);
        }
        return voitureM
    }
    

    public couleurVoiture(couleurVoulu : string): Voiture[]{
        let voituresDeCouleur: Voiture[] = []
       

        for(const voiture of this._listeVoiture){
            if (voiture.couleur === couleurVoulu){
                voituresDeCouleur.push(voiture)
            }
        }
        console.log(`Les voiture de la couleur ${couleurVoulu} en stock sont les suivante: `);
        const infosVoitures: string[] = voituresDeCouleur.map(voiture => {
            return `${voiture.marque} ${voiture.model}, ${voiture.couleur}, Année: ${voiture.anImmat}, Prix: ${voiture.prix} euros`;
        });  
        console.log(infosVoitures);
         
        return voituresDeCouleur
    }

    public ajoutVoiture(voitures: Voiture): void {
        this._listeVoiture.push(voitures);
    }

    public ajoutMoto(motos: Moto): void {
        this._listeMoto.push(motos);
    }

    public ajoutCamion(camions: Camion): void {
        this._listeCamion.push(camions);
    }

    public get nom(): string{
        return this._nom
    }

    public get listeVoiture(): Voiture[]{
        return this._listeVoiture
    }

    public get listeMoto(): Moto[]{
        return this._listeMoto
    }

    public get listeCamion(): Camion[]{
        return this._listeCamion
    }

    public set listeVoiture(voitures: Voiture[]){
        this._listeVoiture = this.listeVoiture
    }

    public set listeMoto(motos: Moto[]){
        this._listeMoto = this.listeMoto
    }

    public set listeCamion(camions: Camion[]){
        this._listeCamion = this.listeCamion
    }


}