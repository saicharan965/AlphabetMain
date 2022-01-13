import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentsCornerComponent } from './parents-corner.component';

describe('ParentsCornerComponent', () => {
  let component: ParentsCornerComponent;
  let fixture: ComponentFixture<ParentsCornerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentsCornerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentsCornerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
