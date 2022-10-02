export class Persona{
    protected nombre:string;
    protected apellido:string;
  
    constructor (pNombre:string, pApellido:string){
        this.nombre=pNombre;
        this.apellido=pApellido;
    }

    getNombre ():string{
        return this.nombre;
    }
    getApellido():string{
        return this.apellido;
    }
    setNombre(nombre:string):void{
        this.nombre = nombre;
    }
    setApellido(apellido:string):void{
        this.apellido = apellido;
    }   
}