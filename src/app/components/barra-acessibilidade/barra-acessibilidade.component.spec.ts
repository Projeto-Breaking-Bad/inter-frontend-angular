import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraAcessibilidadeComponent } from './barra-acessibilidade.component';

describe('BarraAcessibilidadeComponent', () => {
  let component: BarraAcessibilidadeComponent;
  let fixture: ComponentFixture<BarraAcessibilidadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarraAcessibilidadeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarraAcessibilidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
