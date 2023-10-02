import { Camion } from "./Camion";
import { Client } from "./Client";
import { Garage } from "./Garage";
import { Moto } from "./Moto";
import { Voiture } from "./Voiture";

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


const clientM = new Client("Popo", "moins chere")
const clientC = new Client("Poupou", "Rouge")


garage.voitureMoinsCher(clientM.envieVoiture)
garage.couleurVoiture(clientC.envieVoiture)


const Camion1 = new Camion("bmw", "Camion", "DD111KK", "Rouge", 5000000, 10000, 2003)
const moto = new Moto("jeep", "rx", "MO222TO", "Noir", 50000, 1010, 1999)

garage.ajoutCamion(Camion1)
garage.ajoutMoto(moto)
console.log(garage);