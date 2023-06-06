import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarGuestComponent } from './sidebar-guest.component';

describe('SidebarGuestComponent', () => {
  let component: SidebarGuestComponent;
  let fixture: ComponentFixture<SidebarGuestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarGuestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarGuestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
