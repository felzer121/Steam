import {Component, ViewChild} from '@angular/core';
import { FrameServicee} from "./services/frame.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'crash';
  // @ts-ignore
  @ViewChild('sidenav', {static: true}) public sidenav: MatSidenav;

  constructor(private sidenavService: FrameServicee) {
  }

  ngOnInit(): void {
    console.log("SSS"+ this.sidenav);
    this.sidenavService.setSidenav(this.sidenav);
  }
}
