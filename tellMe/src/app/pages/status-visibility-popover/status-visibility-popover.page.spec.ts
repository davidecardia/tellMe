import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusVisibilityPopoverPage } from './status-visibility-popover.page';

describe('StatusVisibilityPopoverPage', () => {
  let component: StatusVisibilityPopoverPage;
  let fixture: ComponentFixture<StatusVisibilityPopoverPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatusVisibilityPopoverPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusVisibilityPopoverPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
