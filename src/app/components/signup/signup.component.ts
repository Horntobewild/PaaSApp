import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  username:string
  email:string
  password:string
  signUpBio: string

  constructor(
    private authService: AuthService, 
    private router: Router,
    private flashMessage: FlashMessagesService
  ) { }

  ngOnInit(): void {
  }


  onSubmit(){
    this.authService.signUp(this.email, this.password)
      .then(res => {
        this.flashMessage.show('You have signed up and can login now!', {
          cssClass: 'alert-success', timeout: 4000
        });
        this.router.navigate(['/']);
        this.authService.addBio(this.signUpBio)
      })
      .catch(err => {
        this.flashMessage.show(err.message, {
          cssClass: 'alert-danger', timeout: 4000
        });
      });
    
    
  }

}
