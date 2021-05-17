import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { SteamAuthService } from "../../../services/steam-auth.service";

@Component({
  selector: 'app-button-auth',
  templateUrl: './button-auth.component.html',
  styleUrls: ['./button-auth.component.scss']
})
export class ButtonAuthComponent implements OnInit {

  constructor(private http: HttpClient, private securityService: OidcSecurityService, private authService: SteamAuthService) {
    console.log(authService.isAuthenticated);
  }

  ngOnInit(): void {
  }

  auth() {
    this.authService.is();
  }
}
