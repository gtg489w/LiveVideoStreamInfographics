import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseballLiveKeyboardComponent } from './baseball-live-keyboard.component';

describe('BaseballLiveKeyboardComponent', () => {
  let component: BaseballLiveKeyboardComponent;
  let fixture: ComponentFixture<BaseballLiveKeyboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaseballLiveKeyboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseballLiveKeyboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
