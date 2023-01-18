import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarSearchFilterComponent } from './navbar-search-filter.component';

describe('NavbarSearchFilterComponent', () => {
  let component: NavbarSearchFilterComponent;
  let fixture: ComponentFixture<NavbarSearchFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarSearchFilterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarSearchFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
