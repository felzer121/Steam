import {Component, ViewChild} from '@angular/core';
import { FrameServicee} from "./services/frame.service";
import { Observable } from 'rxjs';
import { OidcSecurityService } from 'angular-auth-oidc-client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'crash';
  userData$: Observable<any> | undefined;


  // @ts-ignore
  @ViewChild('sidenav', {static: true}) public sidenav: MatSidenav;

  constructor(private oidcSecurityService: OidcSecurityService, private sidenavService: FrameServicee) {
  }

  ngOnInit(): void {
    this.sidenavService.setSidenav(this.sidenav);
    this.userData$ = this.oidcSecurityService.userData$;
  }

  login(): void {
    this.oidcSecurityService.authorize();
  }

  refreshSession(): void {
      this.oidcSecurityService.authorize();
  }

  logoffAndRevokeTokens(): void {
      this.oidcSecurityService.logoffAndRevokeTokens().subscribe((result) => console.log(result));
  }

  revokeRefreshToken(): void {
      this.oidcSecurityService.revokeRefreshToken().subscribe((result) => console.log(result));
  }

  revokeAccessToken(): void {
      this.oidcSecurityService.revokeAccessToken().subscribe((result) => console.log(result));
  }
}
