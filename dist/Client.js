"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
class Client {
    constructor(_nom, _envieVoiture) {
        this._nom = _nom;
        this._envieVoiture = _envieVoiture;
    }
    get nom() {
        return this._nom;
    }
    get envieVoiture() {
        return this._envieVoiture;
    }
    set nom(nom) {
        this._nom = nom;
    }
    set envieVoiture(envieVoiture) {
        this._envieVoiture = envieVoiture;
    }
}
exports.Client = Client;
