import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLoggedIn: boolean;
  loggedInUser: string;
  showLogin: boolean;
  username: string;

  constructor(
    private authService:AuthService,
    private router:Router,
    private flashMessage:FlashMessagesService,
  ) { }

  // ngOnInit(): void {
  //   this.authService.getUsername().subscribe(answer => {
  //     if(answer){
  //       this.username = answer.displayName;
  //     }
  //   })
  // }

  ngOnInit(): void {
    this.authService.getAuth().subscribe(auth => {
      if(auth){
        this.isLoggedIn = true;
        this.loggedInUser = auth.email;
        if(auth.displayName != null){
          this.username = auth.displayName
        } else {
          this.username = auth.email
        }
      } else {
        this.isLoggedIn = false;
      }
    });
  }

  onLogoutClick(){
    this.authService.logout();
    this.flashMessage.show('You have successfully logged out', {
      cssClass: 'alert-success', timeout: 4000
    });
    this.router.navigate(['/'])
  }

}
