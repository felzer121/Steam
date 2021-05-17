import { Injectable } from '@angular/core';
import {MatSidenav, MatSidenavModule} from '@angular/material/sidenav';
import { OidcSecurityService } from 'angular-auth-oidc-client';

@Injectable({
  providedIn: 'root'
})

export class FrameServicee {
  private sidenav: any;

  constructor() {
    this.sidenav = MatSidenav;
  }

  public setSidenav(sidenav: MatSidenav) {
    this.sidenav = sidenav;
  }

  public open() {
    return this.sidenav.open();
  }

  public close() {
    return this.sidenav.close();
  }

  public toggle() {
    return this.sidenav.toggle();
  }
}
