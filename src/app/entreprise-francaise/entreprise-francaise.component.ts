import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-entreprise-francaise',
  templateUrl: './entreprise-francaise.component.html',
  styleUrls: ['./entreprise-francaise.component.scss']
})
export class EntrepriseFrancaiseComponent implements OnInit {
francaiseArray= [];
  constructor(private data:DatabaseService) { }

  ngOnInit() {
    this.data.getEntrepriseFrancaiseList().subscribe(
      list =>{
        this.francaiseArray = list.map(item => {
          return{
            $key: item.key,
            ...item.payload.val()
          }
        })
      }
    )
  }

}
