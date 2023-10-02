export class Client{
    private _nom: string
    private _envieVoiture: string
    constructor(
        _nom: string,
        _envieVoiture: string
    ){
        this._nom = _nom
        this._envieVoiture = _envieVoiture
    }

    public get nom(): string{
        return this._nom
    }

    public get envieVoiture(): string{
        return this._envieVoiture
    }

    public set nom(nom: string){
        this._nom = nom
    }
    public set envieVoiture(envieVoiture: string){
        this._envieVoiture = envieVoiture
    }
}