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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WelcomeScreenComponent,
    WsLeftComponent,
    WsRightComponent,
    SignupComponent,
    SigninComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
