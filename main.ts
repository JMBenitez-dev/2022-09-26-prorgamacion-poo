import { Entrenador } from "./Entrenador";
import { Futbolista } from "./Futbolista";
import { Masajista } from "./Masajista"; 
import { SeleccionDeFutbol } from "./SeleccionFutbol";


let futbolista1 : Futbolista = new Futbolista ("Lionel", "Messi",true,10,"delantero"); 
let futbolista2 : Futbolista = new Futbolista ("Emiliano","Martinez", true, 23,"arquero");
let futbolista3 : Futbolista = new Futbolista ("Angel", "Di Maria",false,11,"centrocampista");

let entrenadorTitular: Entrenador = new Entrenador ("Lionel","Scaloni","Argentino",44);
let entrenadorSuplente: Entrenador = new Entrenador ("Lucas", "Salvatori", "Argentino",25);

let masajista1 : Masajista = new Masajista ("Jose", "Benitez",false); 
let masajista2 : Masajista = new Masajista ("Braian", "Aued",true); 

 let seleccionDeFutbol1 : SeleccionDeFutbol = new SeleccionDeFutbol("");
 


 futbolista1.setTitular(true);
 futbolista2.setTitular(false);
 futbolista3.setTitular(true);
 masajista1.hacerMasaje(true);
 masajista2.hacerMasaje(false);
 entrenadorSuplente.getNacionalidad();
 entrenadorTitular.getApellido();
 seleccionDeFutbol1.setNombreSeleccion("Argentina");

