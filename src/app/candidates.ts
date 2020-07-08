import {Experience} from './experience';
import {Formations} from './formation'
//import { Competence } from './competence';
export class Candidates {
    public  key?: string;
    public nom: string;
    public  prenom: string;
    public  numero: number;
    public  adresse:string;
    public  naissance:string;
    public  image: string;
    public residence:string;
    public permis:string;
    public sexe:string;
    centreinteret:string;
    public langue:string;
    public formation: Formations [];
   // public competence: Competence [];
    public mobilite: string;
   public salaire_minimum: number;
    public nombre_experience: string;
    //public competence: any[]
    public  experience: Experience[];
  
    constructor( key: string,
       nom: string,
       prenom: string,
       numero: number,
       adresse:string,
       naissance:string,
       image: string,
       residence: string,
       permis:string,
       sexe:string,
       centreinteret:string,
       langue:string,
     formation: Formations [],
       mobilite: string,
   salaire_minimum: number,
      nombre_experience:string,
       experience: Experience[],
   ) { 
       this.key=key;
      this.nom=nom;
  this.prenom=prenom;
  this.numero=numero;
  this.adresse=adresse;
  this.naissance=naissance;
  this.image=image;
  this.residence=residence;
  this.permis = permis;
  this.sexe = sexe;
  this.centreinteret = centreinteret;
  this.langue=langue;
  this.formation = formation;
  //this.competence=competence;
  this.mobilite=mobilite;
  this.salaire_minimum= salaire_minimum
  this.nombre_experience= nombre_experience;
  this.experience=experience }
   
}
