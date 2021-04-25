import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crash-schedule',
  templateUrl: './crash-schedule.component.html',
  styleUrls: ['./crash-schedule.component.scss']
})
export class CrashScheduleComponent implements OnInit {
  test = 0;
  icon = -5;
  M212: any;

  constructor() {
  }
  ngOnInit(): void {
    setInterval(() => {
      this.test -= .5;
      this.icon -= .5;
    }, 100);
  }
}
