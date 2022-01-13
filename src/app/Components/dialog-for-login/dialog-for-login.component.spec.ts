import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogForLoginComponent } from './dialog-for-login.component';

describe('DialogForLoginComponent', () => {
  let component: DialogForLoginComponent;
  let fixture: ComponentFixture<DialogForLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogForLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogForLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
