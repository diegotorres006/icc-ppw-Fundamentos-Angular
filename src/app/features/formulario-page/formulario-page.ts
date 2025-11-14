import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormGroup, Validators, FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario-page',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './formulario-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormularioPage { 

  private fb = inject(FormBuilder);

  myForm: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    edad: [0, [Validators.required, Validators.min(18)]],
    correo: ['', [Validators.required, Validators.email]],
  });

  onSubmit() {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }

    console.log('Datos del formulario:', this.myForm.value);
    alert('Formulario enviado con éxito!');
    this.myForm.reset();
  }

  isvalidField(fieldName: string): boolean | null {
    return (this.myForm.controls[fieldName].errors &&
            this.myForm.controls[fieldName].touched);
    } 

  getFieldError(fieldName: string): string | null {
    if (!this.myForm.controls[fieldName]) return null;

    const errors = this.myForm.controls[fieldName].errors ?? {};

    for (const key of Object.keys(errors)) {
      switch (key) {
        case 'required':
          return 'Este campo es obligatorio.';
        case 'minlength':
          return `Mínimo ${errors['minlength'].requiredLength} caracteres.`;
        case 'min':
          return `El valor mínimo es ${errors['min'].min}.`;
        case 'email':
          return 'Formato de correo inválido.';
        default:
          break;
      }
    }
    // Si no hay errores reconocidos, devolver null explícitamente
    return null;
  }
}
