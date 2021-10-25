import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user: any;
  constructor(private authService: AuthServiceService,private router: Router,private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(res => {
      this.user = res.data;
    });
  }
  ngUpdate()
  {
    console.log("jenrnjvr");
  }

  signOut(){
    this.authService.signout();
    this.router.navigate(['/signin']);
  }

}
