import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable()
export class DataService {

  private dataSource = new BehaviorSubject(new Array());
  dataListService = this.dataSource.asObservable();

  constructor() { }

  changeDataList(list) {
    this.dataSource.next(list);
  }
}
