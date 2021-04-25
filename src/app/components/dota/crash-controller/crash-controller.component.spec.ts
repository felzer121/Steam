import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrashControllerComponent } from './crash-controller.component';

describe('CrashControllerComponent', () => {
  let component: CrashControllerComponent;
  let fixture: ComponentFixture<CrashControllerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrashControllerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrashControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
