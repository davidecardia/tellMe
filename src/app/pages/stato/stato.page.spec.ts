import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatoPage } from './stato.page';

describe('StatoPage', () => {
  let component: StatoPage;
  let fixture: ComponentFixture<StatoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
