import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForVerificationPetsComponent } from './for-verification-pets.component';

describe('ForVerificationPetsComponent', () => {
  let component: ForVerificationPetsComponent;
  let fixture: ComponentFixture<ForVerificationPetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForVerificationPetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForVerificationPetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
