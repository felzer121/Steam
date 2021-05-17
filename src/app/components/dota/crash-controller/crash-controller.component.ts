import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import Inventory from "../../../models/Inventory";
import {OidcSecurityService} from "angular-auth-oidc-client";

@Component({
  selector: 'app-crash-controller',
  templateUrl: './crash-controller.component.html',
  styleUrls: ['./crash-controller.component.scss']
})
export class CrashControllerComponent implements OnInit {
  private headers: HttpHeaders = new HttpHeaders();
  inventory: Inventory[] = [];
  isAuthenticated$: Observable<boolean>;
  testData: string = '';
  constructor(private http: HttpClient, private securityService: OidcSecurityService) {
    this.isAuthenticated$ = this.securityService.isAuthenticated$;
  }

  ngOnInit(): void {

  }
  test(): object {
    this.setHeaders();
    let response = this.http.get<object>('https://localhost:5001/inventory/76561198024937592', {headers: this.headers}).subscribe((te)=> console.log(te));
    //?skip=25&take=21
    return response;
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
