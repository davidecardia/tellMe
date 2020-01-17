import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UtentiPage } from './utenti.page';

describe('UtentiPage', () => {
  let component: UtentiPage;
  let fixture: ComponentFixture<UtentiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UtentiPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UtentiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
