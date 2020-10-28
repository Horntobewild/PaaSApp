import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { User } from '../../models/user'

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.css']
})
export class PlansComponent implements OnInit {
  
  username: any
  userData: AngularFirestoreDocument<User>
  userDoc: Observable<User>
  uid: string
  trigger: string

  constructor(
    private authService: AuthService,
    private afStore: AngularFirestore,
  ) { }

  ngOnInit(): void {
    this.authService.getUser().subscribe(data => {
      this.username = data.displayName
      this.uid = data.uid
      this.trigger = ("users/"+this.uid)
      //console.log(this.trigger)
      this.userData = this.afStore.doc(this.trigger)
      this.userDoc = this.userData.valueChanges()
    });
  }

}


