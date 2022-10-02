import { Persona } from "./persona";

export class Entrenador extends Persona{
        protected nacionalidad:string;
        protected edad : number;

        constructor (pNombreEntrenador : string, pApellidoEntrenador : string, pNacionalidad : string, pEdad : number ){
            super(pNombreEntrenador,pApellidoEntrenador);
            this.nacionalidad = pNacionalidad;
            this.edad = pEdad;
           
        }
        public getNacionalidad():string{
            return this.nacionalidad;
        } 
        public getEdad(): number{
            return this.edad;
        }

        public setNacionalidad(nacionalidad : string):void{
            this.nacionalidad=nacionalidad;
        }
        public SetEdad (pEdad : number):void{
            this.edad = pEdad;
        }
}