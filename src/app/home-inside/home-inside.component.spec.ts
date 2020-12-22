import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeInsideComponent } from './home-inside.component';

describe('HomeInsideComponent', () => {
  let component: HomeInsideComponent;
  let fixture: ComponentFixture<HomeInsideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeInsideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeInsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
