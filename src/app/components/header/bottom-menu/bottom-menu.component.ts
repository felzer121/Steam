import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FrameServicee } from "../../../services/frame.service";

@Component({
  selector: 'app-bottom-menu',
  templateUrl: './bottom-menu.component.html',
  styleUrls: ['./bottom-menu.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BottomMenuComponent implements OnInit {

  constructor(private sidenav: FrameServicee) {}

  toggleActive:boolean = false;

  toggleRightSidenav() {
    this.toggleActive = !this.toggleActive;
    this.sidenav.toggle();

    console.log('Clicked');
  }

  ngOnInit(): void {
  }

}
