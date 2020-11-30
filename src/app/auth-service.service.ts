import { Injectable } from '@angular/core';
import { AngularFireAuth } from  "@angular/fire/auth";
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  public signedIn: Observable<any>;

  constructor(private firebaseAuth: AngularFireAuth, private firestore: AngularFirestore) { }

  signUp(email,password){
    this.firebaseAuth.createUserWithEmailAndPassword(email, password)
    .then(res => {
      const uid = res.user.uid;
      const payload = {
        isAdmin: false
      };
      this.firestore.collection('Users').doc(uid).set(payload)
      .then(() => {
          return true;
      })
      .catch(err => {
        return err;
      });
    })
    .catch(err => {
      console.log(err);
      throw err;
    });
  }

  signIn(email, password){
    return this.firebaseAuth.signInWithEmailAndPassword(email, password);
    // then(res => {
    //   const uid = res.user.uid;
    //   this.firestore.collection('Users').doc(uid).ref.get()
    //   .then(response => {
    //     console.log(response.data());
    //   });
    // });
  }

  getAdminData(uid){
    return this.firestore.collection('Users').doc(uid).ref.get();
  }

  getCurrentUser(){
    return new Promise<any>((resolve, reject) => {
      var user = this.firebaseAuth.onAuthStateChanged(user => {
        if (user) {
          resolve(user);
        } else {
          resolve(null);
        }
      });
    });
  }

  signout(){
    this.firebaseAuth.signOut();
  }
}
