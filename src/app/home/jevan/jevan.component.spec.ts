/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { JevanComponent } from './jevan.component';

describe('JevanComponent', () => {
  let component: JevanComponent;
  let fixture: ComponentFixture<JevanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JevanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JevanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
