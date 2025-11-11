import { ChangeDetectionStrategy, Component, output, signal } from '@angular/core';

@Component({
  selector: 'add-proyecto',
  imports: [],
  templateUrl: './add-proyecto.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddProyecto { 
  name = signal('');
  description = signal('');

    newProyecto = output<Proyecto>();
    removeProyecto = output<number>();

  deleteProyecto(id: number) {
    // Lógica para eliminar un proyecto (puedes emitir un evento o llamar a un servicio)
    this.removeProyecto.emit(id); // Pasar el ID del proyecto a eliminar
  }

   addProyecto() {
    const newProyecto: Proyecto = {
      id: Math.floor(Math.random() *1000) ,
      nombre: this.name(),
      descripcion: this.description()
    };
      this.newProyecto.emit(newProyecto),
      this.name.set(''),
      this.description.set('')
  }
   changeName(value: string) {
    this.name.set(value);
  }
  changeDescription(value: string) {
    this.description.set(value);
  }
}
