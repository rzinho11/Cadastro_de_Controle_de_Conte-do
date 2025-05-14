import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, ToastController } from '@ionic/angular';
import { SQLiteService } from '../services/sqlite.service';

@Component({
  selector: 'app-cadastro-livro',
  templateUrl: './cadastro-livro.page.html',
  styleUrls: ['./cadastro-livro.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class CadastroLivroPage {
  nome = '';
  autor = '';
  sinopse = '';

  livros: any[] = [];

  constructor(
    private sqliteService: SQLiteService,
    private toastCtrl: ToastController
  ) {}

  async ionViewWillEnter() {
    await this.carregarLivros();
  }

  async salvarLivro() {
    if (!this.nome || !this.autor || !this.sinopse) {
      this.mostrarToast('Preencha todos os campos.');
      return;
    }

    try {
      const db = this.sqliteService.getDB();
      const query = `INSERT INTO produtos (nome, autor, sinopse) VALUES (?, ?, ?)`;
      await db.run(query, [this.nome, this.autor, this.sinopse]);

      this.mostrarToast('Livro cadastrado!');
      this.nome = '';
      this.autor = '';
      this.sinopse = '';

      await this.carregarLivros(); // recarrega lista
    } catch (err: any) {
      this.mostrarToast('Erro: ' + err.message);
    }
  }

  async carregarLivros() {
    try {
      const db = this.sqliteService.getDB();
      const result = await db.query('SELECT * FROM produtos');
      this.livros = result.values ?? [];
    } catch (err: any) {
      this.mostrarToast('Erro ao carregar: ' + err.message);
    }
  }

  async mostrarToast(msg: string) {
    const toast = await this.toastCtrl.create({
      message: msg,
      duration: 2000,
      position: 'bottom',
    });
    toast.present();
  }
}