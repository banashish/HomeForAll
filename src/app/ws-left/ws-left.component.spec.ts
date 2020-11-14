import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WsLeftComponent } from './ws-left.component';

describe('WsLeftComponent', () => {
  let component: WsLeftComponent;
  let fixture: ComponentFixture<WsLeftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WsLeftComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WsLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
