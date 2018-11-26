import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {

  subjectContent: String;
  expdateContent: Date;
  dataList = new Array();

  constructor(private data: DataService) { }

  ngOnInit() {
  }

  addSubject(){
    this.dataList.push([this.subjectContent, this.expdateContent]); //przekazuje
    this.subjectContent = "";
    this.expdateContent = new Date();
    console.log(this.dataList);

    this.data.changeDataList(this.dataList);
  }
}
