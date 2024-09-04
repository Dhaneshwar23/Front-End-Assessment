import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectorCheckboxComponent } from './selector-checkbox.component';
import { NgIf } from '@angular/common';

describe('SelectorCheckboxComponent', () => {
  let component: SelectorCheckboxComponent;
  let fixture: ComponentFixture<SelectorCheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectorCheckboxComponent,NgIf]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectorCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
