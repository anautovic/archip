import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { TeleoperateurService } from '../teleoperateur.service';
import { Candidates } from '../candidates';
import{Observable} from 'rxjs';
@Component({
  selector: 'app-teleoperateur-cv',
  templateUrl: './teleoperateur-cv.component.html',
  styleUrls: ['./teleoperateur-cv.component.scss']
})
export class TeleoperateurCvComponent implements OnInit {
id;
teleoperateurArray= [];
//selectedTeleoperateur:Candidates;
selectedPersonne:Observable<any>
  constructor( private route:ActivatedRoute, private db: TeleoperateurService) { }

  ngOnInit() {
    this.id= this.route.snapshot.params['id'];
    this.db.getTeleoperateurList().subscribe(
     list => {
       this.teleoperateurArray= list.map(
        item =>{
          return{
            $key:item.key,
            ...item.payload.val()
          }
        } 
       );
     } 
    );
     this.selectedPersonne =this.db.getById(this.id).valueChanges();
    console.log(this.selectedPersonne);
       
  }
  selectPersonne(teleoperateur){
    this.selectedPersonne=teleoperateur;
  }

}
