import { Injectable } from '@angular/core';
import { OidcSecurityService } from "angular-auth-oidc-client";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SteamAuthService {
  isAuthenticated: boolean = false;
  private headers: HttpHeaders = new HttpHeaders();
  constructor(private http: HttpClient, private oidcSecurityService: OidcSecurityService, private securityService: OidcSecurityService,) { }
  is() {
    console.log('app authenticated');
    this.securityService.authorize();
    this.http.get("https://localhost:5001/user", this.setHeaders())
    let a = this.securityService.getPayloadFromIdToken();
    console.log(a)
    return this.oidcSecurityService.checkAuth().subscribe((isAuthenticated) => {
      this.isAuthenticated = isAuthenticated;
      console.log('app authenticated', isAuthenticated);
    });
  }
  private setHeaders(): any {
    this.headers = new HttpHeaders();
    this.headers = this.headers.set('Content-Type', 'application/json');
    this.headers = this.headers.set('Accept', 'application/json');

    const token = this.securityService.getToken();

    console.log(token);
    if (token !== '') {
      const tokenValue = 'Bearer ' + token;
      this.headers = this.headers.append('Authorization', tokenValue);
    }
  }
}
