import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LastAccessPopoverPage } from './last-access-popover.page';

describe('LastAccessPopoverPage', () => {
  let component: LastAccessPopoverPage;
  let fixture: ComponentFixture<LastAccessPopoverPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LastAccessPopoverPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LastAccessPopoverPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
