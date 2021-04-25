import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrashScheduleComponent } from './crash-schedule.component';

describe('CrashScheduleComponent', () => {
  let component: CrashScheduleComponent;
  let fixture: ComponentFixture<CrashScheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrashScheduleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrashScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
