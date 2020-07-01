import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
  userDetailSource=new Subject<any>();
  userDetails$=this.userDetailSource.asObservable()

  onGetData(details){
    this.userDetailSource.next(details)
  }
}
