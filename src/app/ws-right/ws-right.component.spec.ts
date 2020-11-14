import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WsRightComponent } from './ws-right.component';

describe('WsRightComponent', () => {
  let component: WsRightComponent;
  let fixture: ComponentFixture<WsRightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WsRightComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WsRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
