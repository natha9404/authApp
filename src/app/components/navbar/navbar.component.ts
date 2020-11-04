import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {

  isAuthenticated = null

  constructor( public auth: AuthService ) {
    this.isAuthenticated = auth
    console.log(this.isAuthenticated)
   }

  ngOnInit(): void {
  }

}
