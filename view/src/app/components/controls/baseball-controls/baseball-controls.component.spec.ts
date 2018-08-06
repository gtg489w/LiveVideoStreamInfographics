import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseballControlsComponent } from './baseball-controls.component';

describe('BaseballControlsComponent', () => {
  let component: BaseballControlsComponent;
  let fixture: ComponentFixture<BaseballControlsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaseballControlsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseballControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
