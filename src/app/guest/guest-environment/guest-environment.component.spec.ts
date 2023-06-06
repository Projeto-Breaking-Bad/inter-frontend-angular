import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestEnvironmentComponent } from './guest-environment.component';

describe('GuestEnvironmentComponent', () => {
  let component: GuestEnvironmentComponent;
  let fixture: ComponentFixture<GuestEnvironmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuestEnvironmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuestEnvironmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
