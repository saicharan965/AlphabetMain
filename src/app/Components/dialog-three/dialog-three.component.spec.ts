import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogThreeComponent } from './dialog-three.component';

describe('DialogThreeComponent', () => {
  let component: DialogThreeComponent;
  let fixture: ComponentFixture<DialogThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogThreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
