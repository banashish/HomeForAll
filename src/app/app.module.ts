import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { WelcomeScreenComponent } from './welcome-screen/welcome-screen.component';
import { WsLeftComponent } from './ws-left/ws-left.component';
import { WsRightComponent } from './ws-right/ws-right.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//firebase connection

import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { HeaderComponent } from './header/header.component';
import { AvailablePetsComponent } from './available-pets/available-pets.component';
import { UserPetsComponent } from './user-pets/user-pets.component';
import { ForVerificationPetsComponent } from './for-verification-pets/for-verification-pets.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WelcomeScreenComponent,
    WsLeftComponent,
    WsRightComponent,
    SignupComponent,
    SigninComponent,
    HeaderComponent,
    AvailablePetsComponent,
    UserPetsComponent,
    ForVerificationPetsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule ,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule, // Only required for database features
    AngularFireAuthModule, // Only required for auth features,
    AngularFireStorageModule // Only required for storage features
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
