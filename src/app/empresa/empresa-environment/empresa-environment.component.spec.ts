import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpresaEnvironmentComponent } from './empresa-environment.component';

describe('EmpresaEnvironmentComponent', () => {
  let component: EmpresaEnvironmentComponent;
  let fixture: ComponentFixture<EmpresaEnvironmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpresaEnvironmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpresaEnvironmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
