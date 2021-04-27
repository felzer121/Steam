import { Component, OnInit } from '@angular/core';
import { OidcSecurityService } from 'angular-auth-oidc-client';

@Component({
  selector: 'app-button-auth',
  templateUrl: './button-auth.component.html',
  styleUrls: ['./button-auth.component.scss']
})

export class ButtonAuthComponent implements OnInit {
  constructor(private securityService: OidcSecurityService) { }

  ngOnInit(): void {
  }

  auth() {
    this.securityService.authorize();
  }
}
