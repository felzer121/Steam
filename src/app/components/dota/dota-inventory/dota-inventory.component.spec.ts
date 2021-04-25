import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DotaInventoryComponent } from './dota-inventory.component';

describe('DotaInventoryComponent', () => {
  let component: DotaInventoryComponent;
  let fixture: ComponentFixture<DotaInventoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DotaInventoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DotaInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
