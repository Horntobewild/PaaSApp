import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { PaasQueryComponent } from "./components/paas-query/paas-query.component";
import { WelcomeComponent } from "./components/welcome/welcome.component";
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './guards/auth.guards';
import { KanbanComponent } from './components/kanban/kanban.component';
import { SignupComponent } from './components/signup/signup.component';
import { ProfileComponent } from './components/profile/profile.component';
import { PlansComponent } from './components/plans/plans.component';
import { ParserComponent } from './components/parser/parser.component';



const routes: Routes = [
  { path: "", component:WelcomeComponent},
  { path: "paas", component: PaasQueryComponent, canActivate:[AuthGuard]},
  { path: "about", component: AboutComponent},
  { path: "login", component: LoginComponent},
  { path: "tasks", component: KanbanComponent}, 
  { path: "signup", component: SignupComponent}, 
  { path: "profile", component: ProfileComponent}, 
  { path: "plans", component: PlansComponent}, 
  { path: "parser", component: ParserComponent, canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
