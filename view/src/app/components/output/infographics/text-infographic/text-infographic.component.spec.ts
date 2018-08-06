import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextInfographicComponent } from './text-infographic.component';

describe('TextInfographicComponent', () => {
  let component: TextInfographicComponent;
  let fixture: ComponentFixture<TextInfographicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextInfographicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextInfographicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
