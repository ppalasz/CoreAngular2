import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiDropdownComponent } from './api-dropdown.component';

describe('ApiDropdownComponent', () => {
  let component: ApiDropdownComponent;
  let fixture: ComponentFixture<ApiDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApiDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
