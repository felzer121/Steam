import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-button-auth',
  templateUrl: './button-auth.component.html',
  styleUrls: ['./button-auth.component.scss']
})
export class ButtonAuthComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  auth() {
    this.http.get('https://localhost:5001/test').subscribe(r => console.log(r));
  }
}
