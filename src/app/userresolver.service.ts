import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { AuthServiceService } from './auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class UserresolverService implements Resolve<any> {

  constructor(private authService: AuthServiceService) { }

  resolve(){
    return this.authService.getCurrentUser().then(res => {
      const user = res;
      return this.authService.getAdminData(user.uid).then(response => {
        user.isAdmin = response.data().isAdmin;
        return user;
      });
    });
  }
}
