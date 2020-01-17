import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoVisibilityPopoverPage } from './photo-visibility-popover.page';

describe('PhotoVisibilityPopoverPage', () => {
  let component: PhotoVisibilityPopoverPage;
  let fixture: ComponentFixture<PhotoVisibilityPopoverPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotoVisibilityPopoverPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoVisibilityPopoverPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
