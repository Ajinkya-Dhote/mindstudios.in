import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParticlesModule } from 'angular-particle';
import { MarkdownModule } from 'angular2-markdown';

import { AppComponent } from './app.component';
import { HomeComponent, DialogOverviewExampleDialog } from './home/home.component';
import { EulerComponent } from './euler/euler.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';

import { PostsComponent } from './euler/posts/posts.component';

const appRoutes: Routes = [
  { path: 'post', component: PostsComponent },
  { path: 'post/:id', component: EulerComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EulerComponent,
    PostsComponent,
    DialogOverviewExampleDialog
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes
    ),
    MarkdownModule.forRoot(),
    BrowserModule,
    BrowserAnimationsModule,
    ParticlesModule,
    HttpModule,
    MatToolbarModule,
    MatTabsModule,
    MatCardModule,
    MatGridListModule,
    MatButtonModule,
    MatDialogModule
  ],
  providers: [],
  entryComponents: [
    DialogOverviewExampleDialog
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
