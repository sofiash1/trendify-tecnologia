import { ComponentFixture, TestBed } from '@angular/core/testing';

import { headerComponent } from './header.component';

describe('headerComponent', () => {
  let component: headerComponent;
  let fixture: ComponentFixture<headerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [headerComponent]
    });
    fixture = TestBed.createComponent(headerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
