import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {DatabaseService} from '../database.service';
import { dataBase } from '../model/dataBase';

@Component({
  selector: 'app-create-ese-cameroun',
  templateUrl: './create-ese-cameroun.component.html',
  styleUrls: ['./create-ese-cameroun.component.scss']
})
export class CreateEseCamerounComponent implements OnInit {

submitted = false;
  constructor(private data: DatabaseService) { }

  ngOnInit() {
  }
  
  onSubmit(cameroun) {
    this.data.create(cameroun);
  }
 

}
