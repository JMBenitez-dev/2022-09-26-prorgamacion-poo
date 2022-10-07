import { Persona } from "./Persona";

export class Masajista extends Persona {
    protected masaje:boolean; 
        
    constructor (pNombre:string, pApellido:string,pMasaje:boolean){
    super (pNombre,pApellido);
    this.masaje=pMasaje;
    }
       
    public hacerMasaje(masaje:boolean):void{
        
        if (masaje==true) {
            console.log ("El/la masajista "+this.apellido,""+this.nombre, "puede realizar el masaje");
           
        } else { 
         console.log ("El masajista "+this.apellido,""+this.nombre, "no puede realizar masajes");
                }
        }
    }
