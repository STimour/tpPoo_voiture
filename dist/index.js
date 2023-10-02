"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Camion_1 = require("./Camion");
const Client_1 = require("./Client");
const Garage_1 = require("./Garage");
const Moto_1 = require("./Moto");
const Voiture_1 = require("./Voiture");
const garage = new Garage_1.Garage("Gz", []);
const voiture1 = new Voiture_1.Voiture("bmw", "coupé s3", "DD111KK", "Rouge", 5000000, 10000, 2003);
const voiture2 = new Voiture_1.Voiture("jeep", "coupé s3", "LL111KK", "Noir", 50000, 1100, 1899);
const voiture3 = new Voiture_1.Voiture("renault", "coupé s3", "FF111KK", "Rouge", 50000000, 1001, 1799);
const voiture4 = new Voiture_1.Voiture("peugeot", "coupé s3", "CC111KK", "Rose", 400000, 3000, 1699);
const voiture5 = new Voiture_1.Voiture("ds", "coupé s3", "PP111QQ", "Bleu", 100000, 5000, 1599);
garage.ajoutVoiture(voiture1);
garage.ajoutVoiture(voiture2);
garage.ajoutVoiture(voiture3);
garage.ajoutVoiture(voiture4);
garage.ajoutVoiture(voiture5);
const clientM = new Client_1.Client("Popo", "moins chere");
const clientC = new Client_1.Client("Poupou", "Rouge");
garage.voitureMoinsCher(clientM.envieVoiture);
garage.couleurVoiture(clientC.envieVoiture);
const Camion1 = new Camion_1.Camion("bmw", "Camion", "DD111KK", "Rouge", 5000000, 10000, 2003);
const moto = new Moto_1.Moto("jeep", "rx", "MO222TO", "Noir", 50000, 1010, 1999);
garage.ajoutCamion(Camion1);
garage.ajoutMoto(moto);
console.log(garage);
