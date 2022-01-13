import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WrongPassDialogComponent } from './wrong-pass-dialog.component';

describe('WrongPassDialogComponent', () => {
  let component: WrongPassDialogComponent;
  let fixture: ComponentFixture<WrongPassDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WrongPassDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WrongPassDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
