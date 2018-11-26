import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  dataList = new Array();

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.dataListService.subscribe(dataList => this.dataList = dataList)
  }

}
