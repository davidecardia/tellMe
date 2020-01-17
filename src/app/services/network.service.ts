import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { Network } from '@ionic-native/network/ngx';

@Injectable({
  providedIn: 'root'
})
export class NetworkService {
  status: any;

  // conn = new BehaviorSubject(3);
  constructor(private network: Network) {
    // this.network.onConnect().subscribe(() => {
    //   this.conn.next(1);
    // })

    // this.network.onDisconnect().subscribe(() => {
    //   this.conn.next(2);
    // })
  }


  getNetworkStatus() {
    this.network.onChange().subscribe(conn => {
      this.status = conn.type;
    })
  }

}
