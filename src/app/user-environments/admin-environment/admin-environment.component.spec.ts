import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEnvironmentComponent } from './admin-environment.component';

describe('AdminEnvironmentComponent', () => {
  let component: AdminEnvironmentComponent;
  let fixture: ComponentFixture<AdminEnvironmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminEnvironmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminEnvironmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
