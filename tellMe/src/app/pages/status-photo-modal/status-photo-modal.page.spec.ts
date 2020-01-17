import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusPhotoModalPage } from './status-photo-modal.page';

describe('StatusPhotoModalPage', () => {
  let component: StatusPhotoModalPage;
  let fixture: ComponentFixture<StatusPhotoModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatusPhotoModalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusPhotoModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
