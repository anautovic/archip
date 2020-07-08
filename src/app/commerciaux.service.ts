import { Injectable } from '@angular/core';
import {AngularFireDatabase,AngularFireList} from '@angular/fire/database';
import { Candidates } from './candidates';
@Injectable({
  providedIn: 'root'
})
export class CommerciauxService {

  commerciauxList:AngularFireList<Candidates>;

  constructor(private db:AngularFireDatabase) { }
  getCommerciauxList(){
    this.commerciauxList= this.db.list('/commerciaux');
    return this.commerciauxList.snapshotChanges();
  }
  getById(key){
    return this.db.object('/commerciaux/'+ key);
  }

   



}
