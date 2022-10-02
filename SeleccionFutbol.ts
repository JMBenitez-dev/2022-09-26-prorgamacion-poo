export class SeleccionDeFutbol {
   
    private nombreSeleccion: string;
  
    constructor(pNombreSeleccion:string){
        this.nombreSeleccion=pNombreSeleccion;
    }
        public getNombreSeleccion():string{
            return this.nombreSeleccion;
        }
        public setNombreSeleccion(pNombreSeleccion:string):void{
            this.nombreSeleccion = pNombreSeleccion;
        }
 }