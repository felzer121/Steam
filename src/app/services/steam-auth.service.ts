import { Injectable } from '@angular/core';
import { OidcSecurityService } from "angular-auth-oidc-client";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SteamAuthService {
  isAuthenticated!: boolean;
  private headers: HttpHeaders = new HttpHeaders();
  constructor(private http: HttpClient, private securityService: OidcSecurityService) {
    this.securityService.checkAuth().subscribe((isAuthenticated) => {
      this.isAuthenticated = isAuthenticated;
    });
  }
  is() {
    this.securityService.authorize();
  }
}
