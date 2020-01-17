import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  sawUsers = new BehaviorSubject(false);

  constructor() { }

  setSawUsers(sawUsers){
    this.sawUsers.next(sawUsers);
  }

  getSawUsers(){
    return this.sawUsers;
  }
}
