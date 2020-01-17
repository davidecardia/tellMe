import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsGroupModalPage } from './details-group-modal.page';

describe('DetailsGroupModalPage', () => {
  let component: DetailsGroupModalPage;
  let fixture: ComponentFixture<DetailsGroupModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsGroupModalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsGroupModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
