import { Component, OnInit } from '@angular/core';
import {DatabaseService} from '../database.service';
import { map } from 'rxjs/operators';
import {dataBase} from '../model/dataBase';
@Component({
  selector: 'app-entreprise-camerounaise',
  templateUrl: './entreprise-camerounaise.component.html',
  styleUrls: ['./entreprise-camerounaise.component.scss']
})
export class EntrepriseCamerounaiseComponent implements OnInit {
camerounArray= [];
  constructor( private data: DatabaseService) { }

  ngOnInit() {
    this.data.getEntrepriseCamerounaiseList().subscribe(
      list =>{
        this.camerounArray = list.map(item => {
          return{
            $key: item.key,
            ...item.payload.val()
          }
        })
      }
    )
  }
}
