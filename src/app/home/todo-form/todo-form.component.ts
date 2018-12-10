import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {

  subjectContent = "";
  today = new Date();
  expdateContent = this.today.getFullYear() + "-" + (this.today.getMonth() + 1) + "-" + this.today.getDate();
  dataList = new Array();

  constructor(private data: DataService) { }

  ngOnInit() {
  }

  addSubject(){
    
    if(this.subjectContent && this.expdateContent){

      this.dataList.unshift([this.subjectContent, this.expdateContent]);
      this.subjectContent = "";
      this.today = new Date();
      this.expdateContent = this.today.getFullYear() + "-" + (this.today.getMonth() + 1) + "-" + this.today.getDate();
      console.log("ORIG DATES: " + this.dataList);
      this.dataList.sort((a, b) => b[1] - a[1]);
      //console.log("SEGR DATES: " + this.dataList[0][1]);
      //console.log("A: " + a[1] + ", B: " + b[1]);
      this.data.changeDataList(this.dataList);
    }
    else if(!this.subjectContent && !this.expdateContent){
      window.alert("EXCEPTION - EMPTY SUBJECT AND DATE");
      throw("EXCEPTION - EMPTY SUBJECT AND DATE");
    }
    else if(!this.subjectContent){
      window.alert("EXCEPTION - EMPTY SUBJECT");
      throw("EXCEPTION - EMPTY SUBJECT");
    }
    else if(!this.expdateContent){
      window.alert("EXCEPTION - EMPTY DATE");
      throw("EXCEPTION - EMPTY DATE");
    }
    else{
      window.alert("EXCEPTION - UNKNOWN ISSUE");
      throw("EXCEPTION - UNKNOWN ISSUE");
    }
    
  }
}
