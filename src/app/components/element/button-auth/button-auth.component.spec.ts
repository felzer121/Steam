import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonAuthComponent } from './button-auth.component';

describe('ButtonAuthComponent', () => {
  let component: ButtonAuthComponent;
  let fixture: ComponentFixture<ButtonAuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonAuthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
