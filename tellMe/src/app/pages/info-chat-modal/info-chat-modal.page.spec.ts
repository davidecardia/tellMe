import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoChatModalPage } from './info-chat-modal.page';

describe('InfoChatModalPage', () => {
  let component: InfoChatModalPage;
  let fixture: ComponentFixture<InfoChatModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoChatModalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoChatModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
