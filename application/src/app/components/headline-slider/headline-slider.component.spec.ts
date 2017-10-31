import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadlineSliderComponent } from './headline-slider.component';

describe('HeadlineSliderComponent', () => {
  let component: HeadlineSliderComponent;
  let fixture: ComponentFixture<HeadlineSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadlineSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadlineSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
