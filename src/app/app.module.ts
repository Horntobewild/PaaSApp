import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { PaasQueryComponent } from './components/paas-query/paas-query.component';
import { FormsModule } from '@angular/forms';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { PaasResultsComponent } from './components/paas-results/paas-results.component';
import { AboutComponent } from './components/about/about.component';
import { HttpClientModule } from '@angular/common/http';

import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { environment } from "../environments/environment";
import { LoginComponent } from './components/login/login.component';
import { ArticlesService } from './services/articles.service';
import { AuthService } from './services/auth.service';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { KanbanComponent } from './components/kanban/kanban.component';
import { DragDropModule } from "@angular/cdk/drag-drop";
import { SignupComponent } from './components/signup/signup.component';
import { ProfileComponent } from './components/profile/profile.component';
import { PlansComponent } from './components/plans/plans.component';
import { ParserComponent } from './components/parser/parser.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PaasQueryComponent,
    WelcomeComponent,
    PaasResultsComponent,
    AboutComponent,
    LoginComponent,
    KanbanComponent,
    SignupComponent,
    ProfileComponent,
    PlansComponent,
    ParserComponent,    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule, 
    FlashMessagesModule.forRoot(),
    DragDropModule,
  ],
  providers: [ArticlesService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
