import { Component, OnInit } from '@angular/core';
import { CommerciauxService } from '../commerciaux.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-commerciaux-cv',
  templateUrl: './commerciaux-cv.component.html',
  styleUrls: ['./commerciaux-cv.component.scss']
})
export class CommerciauxCvComponent implements OnInit {
id;
commercialsArray = [];
selectedPersonne: Observable<any>
  constructor(private route: ActivatedRoute, private db: CommerciauxService) { }

  ngOnInit() {
    this.id= this.route.snapshot.params['id'];
    this.db.getCommerciauxList().subscribe(
     list => {
       this.commercialsArray= list.map(
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
  selectPersonne(commercial){
    this.selectedPersonne=commercial;
  }


}
