import { Persona } from "./Persona";

export class Futbolista extends Persona {
        protected titular : boolean;
        protected numeroCamiseta : number;
        protected posicionDeJuego : string;


        constructor (pNombre : string, pApellido : string, pTitular : boolean, pNumeroCamiseta : number, pPosicionDeJuego : string){
        super (pNombre,pApellido);
        this.titular = pTitular;
        this.numeroCamiseta = pNumeroCamiseta;
        this.posicionDeJuego  = pPosicionDeJuego;
        }
    
    public getCamiseta():number{
        return this.numeroCamiseta;
    }
    public getPosicionDeJuego():string{
        return this.posicionDeJuego;
    }
    public getTitular():boolean{
        return this.titular;
    }

    public setCamiseta(pNumeroCamiseta:number):void{
        this.numeroCamiseta=pNumeroCamiseta;
        console.log("se cambio el numero de camiseta al jugador: " + this.apellido ,""+this.nombre, "el numero asignado es: "+this.numeroCamiseta);
    }
    public setPosicionDeJuego(pPosicion : string): void{
        this.posicionDeJuego = pPosicion;
        console.log("se cambio la posicion de juego al jugador: " + this.apellido ,""+this.nombre)
    }
    public setTitular(titular:boolean):void{
        this.titular=titular;
        if (titular==true){
            console.log("El jugador "+ this.apellido ,""+this.nombre, " es TITULAR");
        } else {
            console.log("El jugador "+ this.apellido ,""+this.nombre, " es SUPLENTE");
        }
    }   
}