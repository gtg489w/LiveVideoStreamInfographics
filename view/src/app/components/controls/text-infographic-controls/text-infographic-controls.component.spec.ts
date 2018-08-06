import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextInfographicControlsComponent } from './text-infographic-controls.component';

describe('TextInfographicControlsComponent', () => {
  let component: TextInfographicControlsComponent;
  let fixture: ComponentFixture<TextInfographicControlsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextInfographicControlsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextInfographicControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
