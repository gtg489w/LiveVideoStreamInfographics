import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseballSettingsComponent } from './baseball-settings.component';

describe('BaseballSettingsComponent', () => {
  let component: BaseballSettingsComponent;
  let fixture: ComponentFixture<BaseballSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaseballSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseballSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
