import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import 'hammerjs';

import { MatToolbarModule, MatButtonModule, MatIconModule, MatTabsModule, MatCardModule, MatListModule } from '@angular/material';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component'
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { HomeComponent } from './home/home.component';
import { JevanComponent } from './home/jevan/jevan.component';
import { UserService } from './services/user.service';

import { LineGraphComponent } from './common/graphs/line-graph/line-graph.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: HomeComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PageNotFoundComponent,
    HomeComponent,
    JevanComponent,
    LineGraphComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    FlexLayoutModule,
    RouterModule.forRoot(
      appRoutes
    ),
    AngularFireModule.initializeApp(environment.firebase, 'my-health'),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatTabsModule,
    MatCardModule,
    MatListModule
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
