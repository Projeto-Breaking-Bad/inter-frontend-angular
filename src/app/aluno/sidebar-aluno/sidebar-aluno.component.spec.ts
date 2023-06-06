import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarAlunoComponent } from './sidebar-aluno.component';

describe('SidebarAlunoComponent', () => {
  let component: SidebarAlunoComponent;
  let fixture: ComponentFixture<SidebarAlunoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarAlunoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarAlunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
