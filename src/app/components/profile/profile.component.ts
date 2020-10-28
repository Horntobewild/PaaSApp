import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  username: string
  email: string

  constructor(
    private authService: AuthService,
    private flaschMessage: FlashMessagesService,
  ) { }

  ngOnInit(): void {
    this.authService.getUser().subscribe(userData => {
      this.username = userData.displayName
      this.email = userData.email
    })
  }

  onSubmit(){
    this.authService.updateUsername(this.username)
    this.authService.updateEmail(this.email)
    this.flaschMessage.show('Sucess!', {
      cssClass: 'alert-success', timeout: 4000
    });
    setTimeout(()=>
    {
      location.reload();
    }, 200)
  }

}
