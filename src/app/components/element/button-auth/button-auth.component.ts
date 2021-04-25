import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-auth',
  templateUrl: './button-auth.component.html',
  styleUrls: ['./button-auth.component.scss']
})
export class ButtonAuthComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  auth() {
    document.location.href="https://localhost:5001/identity/login";
  }
}
