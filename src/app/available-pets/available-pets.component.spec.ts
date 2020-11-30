import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailablePetsComponent } from './available-pets.component';

describe('AvailablePetsComponent', () => {
  let component: AvailablePetsComponent;
  let fixture: ComponentFixture<AvailablePetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvailablePetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvailablePetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
