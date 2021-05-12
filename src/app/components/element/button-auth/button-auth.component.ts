import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OidcSecurityService } from 'angular-auth-oidc-client';

@Component({
  selector: 'app-button-auth',
  templateUrl: './button-auth.component.html',
  styleUrls: ['./button-auth.component.scss']
})
export class ButtonAuthComponent implements OnInit {

  constructor(private http: HttpClient, private securityService: OidcSecurityService) { }

  ngOnInit(): void {
  }

  auth() {
    this.securityService.authorize();
    let a = this.securityService.getPayloadFromIdToken();
    console.log(a);
  }
}
