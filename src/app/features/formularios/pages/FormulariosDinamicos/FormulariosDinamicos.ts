import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import {
  FormBuilder,
  ReactiveFormsModule,
  Validators,
  FormGroup,
  FormControl,
  FormArray,
} from '@angular/forms';
import { FormularioBasicosPage } from '../../../../utils/FormularioBasicosPage';

@Component({
  selector: 'app-formularios-dinamicos',
  imports: [ReactiveFormsModule],
  templateUrl: './FormulariosDinamicos.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormulariosDinamicos {
  private fb = inject(FormBuilder);
  formUtils = FormularioBasicosPage;

  myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],

    lenguajes: this.fb.array(
      [
        this.fb.control('Python', [Validators.required, Validators.minLength(3)]),
        this.fb.control('Java', [Validators.required, Validators.minLength(3)]),
      ],
      Validators.minLength(3)
    ),
  });

  // Eliminar lenguaje
  onDeleteLenguaje(index: number) {
    this.lenguajes.removeAt(index);
  }

  // Enviar
  onSubmit() {
    this.myForm.markAllAsTouched();
    console.log(this.myForm.value);
  }

  newLenguaje: FormControl = this.fb.control('', [Validators.required, Validators.minLength(3)]);

  // Agregar lenguaje dinámicamente
  onAddToLenguajes() {
    if (this.newLenguaje.invalid) return;

    this.lenguajes.push(this.fb.control(this.newLenguaje.value, Validators.required));

    this.newLenguaje.reset();
  }

  // Obtener lenguajes como FormArray
  get lenguajes(): FormArray {
    return this.myForm.get('lenguajes') as FormArray;
  }
}