import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
@Injectable()
export class UserService {

  private authStateSub = new Subject<any>();

  constructor(public afAuth: AngularFireAuth) {}
  
     setAuthState(state: boolean) {
         this.authStateSub.next({ state: state });
     }

     getAuthState(): Observable<any> {
        return this.authStateSub.asObservable();
     }

}
