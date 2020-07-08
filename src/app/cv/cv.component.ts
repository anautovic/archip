import { Component, OnInit } from '@angular/core';
import { Candidates } from '../candidates';
import { DatabaseService } from '../database.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss']
})
export class CvComponent implements OnInit {
id;
  candidatsArray= [];
 // selectedPersonne: Candidates
 selectedPersonne:Observable<any>;
  constructor(private db: DatabaseService,
    private route: ActivatedRoute,) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.db.getCandidatList().subscribe(
      list=>{
        this.candidatsArray= list.map(
      item=>{
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
    /*this.candidats= [
      new Candidates('dfsfdsfd55','mogan','vanissa',67331918,'jhhjghgh', 'bonaberi','photo','Oui',150000, '1ans',
    [{date_de_debut:'5 decembre',date_de_fin:'20 mars',domaine_competence:'assistance',
    entreprise:'COGENI SA',poste:'assistante marketing'},
    {date_de_debut:'15 janvier 2015',date_de_fin:'20 mars 2020',domaine_competence:'assistance', 
    entreprise:'COMALU SARL',poste:'assistante direction'}
    ]
    ),
    new Candidates('jgdgfgdg','wilfried','fonkeng',694247072,'05/04/1995', 'bonaberi','photo','Non',70000, '2 ans 6 mois',
    [{date_de_debut:'19 janvier',date_de_fin:'20 mars',domaine_competence:'assistance,', entreprise:'Archipel',
    poste:'assistante marketing',},
    {date_de_debut:'2 janvier 2015',date_de_fin:'20 mars 2020',
    domaine_competence:'assistance',entreprise:'KTA SARL',poste:'Commercial'
    }
    ]
    )
  
  ];*/
  }

  selectPersonne(candidat){
    this.selectedPersonne=candidat;
  }

}
