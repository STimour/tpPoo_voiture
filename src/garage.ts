import { Voiture } from "./voiture"

export class Garage{
    private _nom: string
    private _listeVoiture: Voiture[] = [] 

    constructor(
        _nom: string, 
        _listeVoiture: Voiture[] = []
        )
       { this._nom = _nom
        this._listeVoiture = _listeVoiture}

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

    public ajoutVoiture(voiture: Voiture): void {
        this._listeVoiture.push(voiture);
    }
}