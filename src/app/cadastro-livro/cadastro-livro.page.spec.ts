import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CadastroLivroPage } from './cadastro-livro.page';

describe('CadastroLivroPage', () => {
  let component: CadastroLivroPage;
  let fixture: ComponentFixture<CadastroLivroPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CadastroLivroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
