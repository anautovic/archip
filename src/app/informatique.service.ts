import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from '@angular/fire/database';
import{dataBase} from './model/dataBase';
import { Candidates } from './candidates';

@Injectable({
  providedIn: 'root'
})
export class InformatiqueService {
  informaticienList: AngularFireList<Candidates> ;
  constructor(private db:AngularFireDatabase) { }
  getInformaticienList(){
    this.informaticienList= this.db.list('/informaticiens');
    return this.informaticienList.snapshotChanges();
  }
  getInById(key){
    return this.db.object('/informaticiens/'+ key);
  }
   



  
}
