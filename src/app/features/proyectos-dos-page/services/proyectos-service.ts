import { effect, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {

  private readonly STORAGE_KEY = 'proyectosApp';
  constructor() {
    // funcion = () => { ... }
    effect(() => {
      // Guardar los proyectos en el almacenamiento local cuando cambian
      const data = this.proyectos();
      console.log(JSON.stringify(data));
      console.log('Guardando proyectos en localStorage:', data);
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(data));
    });

   }
  name = signal('');
  description = signal('');
 //proyectos = signal<Proyecto[]>([
  //  { id: 1, nombre: 'Proyecto A', 
  //    descripcion: 'descripcion' }
 // ]);
   changeName(value: string) {
    this.name.set(value);
  }
  changeDescription(value: string) {
    this.description.set(value);
  }
  addProyecto(newProyecto : Proyecto){
     this.proyectos.set([...this.proyectos(), newProyecto]);
  }

  deleteProyecto(id: number){
    this.proyectos.set(this.proyectos().slice(1));
  }

  updateProyecto(updatedProyecto: Proyecto){
    this.proyectos.set(this.proyectos().map(proyecto => 
      proyecto.id === updatedProyecto.id ? updatedProyecto : proyecto
    ));
  }

  proyectos = signal<Proyecto[]>(this.loadProyectos());

  private loadProyectos(): Proyecto[] {
    const data= localStorage.getItem(this.STORAGE_KEY);
    return data ? JSON.parse(data) : [{ 
    id: 1, nombre: 'Proyecto A', 
    descripcion: 'descripcion' 
  },];

  }
}
