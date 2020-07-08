import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
//import { DatabasService } from '../database.service';
import { Candidates } from '../candidates';
import { InformatiqueService } from '../informatique.service';


@Component({
  selector: 'app-informatique-cv',
  templateUrl: './informatique-cv.component.html',
  styleUrls: ['./informatique-cv.component.scss']
})
export class InformatiqueCvComponent implements OnInit {
  candidats: Candidates [];
id;
informaticiensArray= [];
 // selectedPersonne: Candidates
 selectedPersonne:Observable<any>;
 //selectedPersonneIn:Candidates
 selectedPersonneIn:Observable<any>
  constructor(private db: InformatiqueService,
    private route: ActivatedRoute,) { }
    /*ngOnInit(){
      
      this.candidats= [
        new Candidates('dfsfdsfd55','mogan','vanissa',67331918,'jhhjghgh', 'bonaberi','photo', 'yaounde','Oui',150000, '1ans',
      [{date_de_debut:'5 decembre',date_de_fin:'20 mars',domaine_competence:'assistance',
      entreprise:'COGENI SA',poste:'assistante marketing'},
      {date_de_debut:'15 janvier 2015',date_de_fin:'20 mars 2020',domaine_competence:'assistance', 
      entreprise:'COMALU SARL',poste:'assistante direction'}
      ]
      ),
      new Candidates('jgdgfgdg','wilfried','fonkeng',694247072,'05/04/1995', 'bonaberi','photo','douala','Non',70000, '2 ans 6 mois',
      [{date_de_debut:'19 janvier',date_de_fin:'20 mars',domaine_competence:'assistance,', entreprise:'Archipel',
      poste:'assistante marketing',},
      {date_de_debut:'2 janvier 2015',date_de_fin:'20 mars 2020',
      domaine_competence:'assistance',entreprise:'KTA SARL',poste:'Commercial'
      }
      ]
      )
    
    ];
    }*/

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.db.getInformaticienList().subscribe(
      list=>{
        this.informaticiensArray= list.map(
      item=>{
        return{
          $key:item.key,
          ...item.payload.val()
        }
      }
        );
      }
    );
    this.selectedPersonneIn =this.db.getInById(this.id).valueChanges();
console.log(this.selectedPersonneIn);
   
  }


   selectPersonneIn(can) {
      this.selectedPersonneIn=can;
    }

  
    
    
   
  }

 
  


