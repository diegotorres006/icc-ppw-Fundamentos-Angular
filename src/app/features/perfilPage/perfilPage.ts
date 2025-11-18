import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './perfilPage.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Perfil {
  // señales (signals)
  name = signal<string>('Juan');
  lastName = signal<string>('Pérez');
  age = signal<number>(30);

  // métodos solicitados
  getFullName(): string {
    return `${this.name()} ${this.lastName()} con edad ${this.age()} años`;
  }

  changeData(): void {
    this.name.set('Ana');
    this.lastName.set('Gonzales');
    this.age.set(25);
  }

  changeAge(): void {
    this.age.set(18);
  }

  resetData(): void {
    this.name.set('Juan');
    this.lastName.set('Pérez');
    this.age.set(30);
  }
}