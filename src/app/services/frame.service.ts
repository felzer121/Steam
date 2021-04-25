import { Injectable } from '@angular/core';
import {MatSidenav, MatSidenavModule} from '@angular/material/sidenav';

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
    console.log(this.sidenav);
    return this.sidenav.toggle();
  }
}
