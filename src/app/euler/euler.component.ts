import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {DomSanitizer} from '@angular/platform-browser';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-euler',
  templateUrl: './euler.component.html',
  styleUrls: ['./euler.component.css']
})
export class EulerComponent implements OnInit {

  path = "";
  learningPath = "";
  constructor(
    private route: ActivatedRoute,
    private router: Router,

    // private service: HeroService
  ) {}

  ngOnInit() {

    let id = this.route.snapshot.paramMap.get('id');
    this.path = `/assets/euler/${id}/README.md`;
    this.learningPath = `/assets/euler/${id}/LEARNING.md`;
    console.log(this.path);
  }

}
