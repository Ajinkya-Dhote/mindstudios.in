import { Component, OnInit, NgZone } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  items: Observable<any[]>;
  constructor(db: AngularFirestore,
              public afAuth: AngularFireAuth,
              private ngZone: NgZone,
              private router: Router,
              public userService: UserService) {
    this.items = db.collection('test').valueChanges();
  }
  ngOnInit() {
    this.afAuth.authState.subscribe(res => {
      if(res !== null) {
       this.goToHome();
       this.userService.setAuthState(true);
      } else {
        this.userService.setAuthState(false);
      }
     });
  }
  
  login() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then(res => {
        console.log("login success");
        this.userService.setAuthState(true);
        this.goToHome();
      });
  }
  logout() {
    this.userService.setAuthState(false);    
    this.afAuth.auth.signOut();
  }

  goToHome() {
    this.ngZone.run(() => {
      console.log("hiii");
      
      this.router.navigateByUrl('');
    });
    console.log("hhh");
    
    this.router.navigate[''];
  }
  
}
