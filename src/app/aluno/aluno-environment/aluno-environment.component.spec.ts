import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlunoEnvironmentComponent } from './aluno-environment.component';

describe('AlunoEnvironmentComponent', () => {
  let component: AlunoEnvironmentComponent;
  let fixture: ComponentFixture<AlunoEnvironmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlunoEnvironmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlunoEnvironmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
