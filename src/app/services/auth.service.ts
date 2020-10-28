import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { UseExistingWebDriver } from 'protractor/built/driverProviders';




@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(
    private afAuth: AngularFireAuth,
    private afStore: AngularFirestore,
  ) { }


  signUp(email: string, password: string){
    return new Promise((resolve, reject) => {
      this.afAuth.createUserWithEmailAndPassword(email, password)
      .then(userData => resolve(userData),
      err => reject(err));
    })  
  }

  addBio(signUpBio:string){
    this.afAuth.authState.subscribe(data => {
      this.afStore.collection('users').doc(data.uid).set({
        shortBio: signUpBio
      })
    })
      
  }
  

  login(email: string, password: string){
    return new Promise((resolve, reject) => {
      this.afAuth.signInWithEmailAndPassword(email, password).then(
        userData => resolve(userData), 
        err => reject(err)
        );
    })
  }

  getAuth(){
    return this.afAuth.authState.pipe(auth => auth);
  }

  //what is the difference between .authState and .user?!
  getUser(){
    return this.afAuth.user.pipe(userData => userData)
  }

  updateUsername(username:string){
    this.afAuth.authState.subscribe(user => {
      if(user){
        user.updateProfile({
          displayName: username
        }) 
      }
    })
  }  

  updateEmail(email:string){
    this.afAuth.user.subscribe(user => {
      if(user){
        user.updateEmail(email)
        }
      })
  }
  
  

  logout(){
    this.afAuth.signOut();
  }
}
