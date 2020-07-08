import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from '@angular/fire/database';
import{dataBase} from './model/dataBase';
import { Candidates } from './candidates';
//import {AngularFireDatabase} from'@angular/fire/database';
@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  //private dbPath='/entrepriseCamerounaise';
  entreprisecamerounaiseList: AngularFireList<dataBase>;
  entreprisefrancaiseList: AngularFireList<dataBase>;
  candidatList: AngularFireList<Candidates>
  informaticienList : AngularFireList<Candidates> ;
cameroun: dataBase;
  particular:any= [{
    name:'Danse', quantite:3},
  {name:'cinema',quantite:3},{name:'passer du temps en famille', quantite:1},{name:'télévision', quantite:1},
  {name:'debat', quantite:1},{name:'communication', quantite:1}


  ]
  particularMa: any= [{
    name:'Danse', quantite:3},
  {name:'cinema',quantite:3},{name:'passer du temps en famille', quantite:1},{name:'télévision', quantite:1},
  {name:'debat', quantite:1},{name:'communication', quantite:1}]
  constructor( private db:AngularFireDatabase) {
    //this.entreprisecamerounaiseRef =  db.list(this.dbPath);
   }
   create(cameroun:dataBase){
    return this.db.list('/entrepriseCamerounaise').push(cameroun);
   }
   getEntrepriseCamerounaiseList(){
    this.entreprisecamerounaiseList = this.db.list('entrepriseCamerounaise');
    return this.entreprisecamerounaiseList.snapshotChanges();
   };
   getEntrepriseFrancaiseList(){
     this.entreprisefrancaiseList = this.db.list('entrepriseFrancaise');
     return this.entreprisefrancaiseList.snapshotChanges();
   }
   getCandidatList(){
     this.candidatList= this.db.list('/candidats');
     return this.candidatList.snapshotChanges();
   }
   getById(key){
     return this.db.object('/candidats/'+ key);
   }
   getInformaticienList(){
    this.informaticienList= this.db.list('/informaticiens');
    return this.informaticienList.snapshotChanges();
  }
  getInById(key){
    return this.db.object('/informaticiens/'+ key);
  }
   
}

