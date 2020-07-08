import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from '@angular/fire/database';
import { Candidates } from './candidates';
@Injectable({
  providedIn: 'root'
})
export class TeleoperateurService {

teleoperateurList:AngularFireList<Candidates>
  constructor(private db:AngularFireDatabase) { }
  getTeleoperateurList(){
    this.teleoperateurList= this.db.list('/teleoperateur');
    return this.teleoperateurList.snapshotChanges();
  }
  getById(key){
    return this.db.object('/teleoperateur/'+ key);
  }
}
