import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-jevan',
  templateUrl: './jevan.component.html',
  styleUrls: ['./jevan.component.css']
})
export class JevanComponent implements OnInit {

  items: Observable<any[]>;
  col: AngularFirestoreCollection<any>;
  dat: Date;
  user: any;

  constructor(db: AngularFirestore, userService: UserService) {
    this.items = db.collection('test').valueChanges();

    this.col =  db.collection('test');
    this.dat = new Date();

    userService.getUser().subscribe( res => {
      console.log('res');
      console.log(res);
      this.user = res;
    })
    this.add();
  }

  add(){
    this.col.doc('test').set({
      'name': 'Himanshu...',
      'password': 'himanshu',
      'email': 'himanshu.dhote03@gmail.com'
    })
      .catch((err) => {
      console.log(err);
    })
  }
  

  width: number;
  height: number;

  ngOnInit() {
    this.width = document.getElementsByTagName('body')[0].clientWidth;
    this.height = document.getElementsByTagName('body')[0].clientHeight;
  }

}
