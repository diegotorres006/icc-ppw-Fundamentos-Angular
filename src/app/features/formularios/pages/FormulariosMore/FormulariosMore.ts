import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormularioBasicosPage } from '../../../../utils/FormularioBasicosPage';

@Component({
  selector: 'app-formularios-more',
  imports: [ReactiveFormsModule],
  templateUrl: './FormulariosMore.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormulariosMore {
  private fb = inject(FormBuilder);
  formUtils = FormularioBasicosPage;

  myForm: FormGroup = this.fb.group({
    genero: ['M', [Validators.required]],
    notificaciones: [true, [Validators.required]],
    condiciones: [false, [Validators.requiredTrue]],
  });

  onSubmit() {
    this.myForm.markAllAsTouched();

    if (this.myForm.invalid) return;

    console.log('Datos enviados:', this.myForm.value);
    alert('Formulario válido. Datos registrados correctamente.');
  }
}