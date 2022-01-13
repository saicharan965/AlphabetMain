import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MsAlComponent } from './ms-al.component';

describe('MsAlComponent', () => {
  let component: MsAlComponent;
  let fixture: ComponentFixture<MsAlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MsAlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MsAlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
