import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  isLogoutButtonHidden: boolean;
  displayName: string;
  
  constructor(public afAuth: AngularFireAuth,
              public userSService: UserService) { }
  
  ngOnInit() {
    this.afAuth.authState.subscribe(res => {
      if(res === null) {
       // this.isLogoutButtonHidden = true;
      } else {
        // this.isLogoutButtonHidden = false;
        console.log(res);
        this.displayName = res.displayName;
        
      }

      
    });

    this.userSService.getAuthState().subscribe(res => {
      if(res.state) {
        console.log('true');
        this.isLogoutButtonHidden = false;
      } else {
        console.log('false');
        
        this.isLogoutButtonHidden = true;
      }
      
    });
  }

  logout() {
    this.isLogoutButtonHidden = true;
    console.log('logout');
    
    this.afAuth.auth.signOut();
  }
}
