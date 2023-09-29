export class Voiture{
    private _marque: string
    private _model: string
    private _immat: string
    private _couleur: string
    private _km: number
    private _prix: number
    private _anImmat: number

    constructor(
         _marque: string,
         _model: string,
         _immat: string,
         _couleur: string,
         _km: number,
         _prix: number,
         _anImmat: number
    ){
        this._marque = _marque
        this._model = _model
        this._immat = _immat
        this._couleur = _couleur
        this._km = _km
        this._prix =_prix
        this._anImmat = _anImmat
    }

    public get marque(): string{
        return this._marque
    }

    public get model(): string{
        return this._model
    }

    public get immat(): string{
        return this._immat
    }

    public get couleur(): string{
        return this._couleur
    }

    public get km(): number{
        return this._km
    }

    public get prix(): number{
        return this._prix
    }

    public get anImmat(): number{
        return this._anImmat
    }



    public set marque(marque: string){
         this._marque = marque
    }

    public set model(model: string){
         this._model = model
    }

    public set immat(immat: string){
         this._immat = immat
    }

    public set couleur(couleur : string){
         this._couleur = couleur
    }

    public set km(km: number){
         this._km = km
    }

    public set prix(prix : number){
         this._prix = prix
    }

    public set anImmat(anImmat: number){
         this._anImmat = anImmat
    }
}