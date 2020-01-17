import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFontSizePopoverPage } from './edit-font-size-popover.page';

describe('EditFontSizePopoverPage', () => {
  let component: EditFontSizePopoverPage;
  let fixture: ComponentFixture<EditFontSizePopoverPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditFontSizePopoverPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditFontSizePopoverPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
