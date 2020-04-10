import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageRecentComponent } from './image-recent.component';

describe('ImageRecentComponent', () => {
  let component: ImageRecentComponent;
  let fixture: ComponentFixture<ImageRecentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageRecentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageRecentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
