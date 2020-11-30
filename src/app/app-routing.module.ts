import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthServiceGuard } from './auth-service.guard';
import { AvailablePetsComponent } from './available-pets/available-pets.component';
import { ForVerificationPetsComponent } from './for-verification-pets/for-verification-pets.component';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { UserPetsComponent } from './user-pets/user-pets.component';
import { UserresolverService } from './userresolver.service';
import { WelcomeScreenComponent } from './welcome-screen/welcome-screen.component';

const routes: Routes = [
  {
    path: '',
    component: WelcomeScreenComponent,
    children: [
      {
        path: '',
        component: SignupComponent,
      },
      {
        path: 'signin',
        component: SigninComponent,
      },
    ],
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthServiceGuard],
    resolve: {data : UserresolverService},
    children: [
      {
        path: '',
        component: AvailablePetsComponent
      },
      {
        path: 'available',
        component: AvailablePetsComponent
      },
      {
        path: 'your-pets',
        component: UserPetsComponent
      },
      {
        path: 'verification',
        component: ForVerificationPetsComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
