import { Client } from "./client";
import { Garage } from "./garage";
import { Voiture } from "./voiture";

const garage = new Garage("Gz", [])

const voiture1 = new Voiture("bmw", "coupé s3", "DD111KK", "Rouge", 5000000, 10000, 2003)
const voiture2 = new Voiture("jeep", "coupé s3", "LL111KK", "Noir", 50000, 1100, 1899)
const voiture3 = new Voiture("renault", "coupé s3", "FF111KK", "Rouge", 50000000, 1001, 1799)
const voiture4 = new Voiture("peugeot", "coupé s3", "CC111KK", "Rose", 400000, 3000, 1699)
const voiture5 = new Voiture("ds", "coupé s3", "PP111QQ", "Bleu", 100000, 5000, 1599)

garage.ajoutVoiture(voiture1)
garage.ajoutVoiture(voiture2)
garage.ajoutVoiture(voiture3)
garage.ajoutVoiture(voiture4)
garage.ajoutVoiture(voiture5)

console.log(garage);

const clientM = new Client("Popo", "moins chere")
const clientC = new Client("Poupou", "Rouge")


garage.voitureMoinsCher(clientM.envieVoiture)
garage.couleurVoiture(clientC.envieVoiture)