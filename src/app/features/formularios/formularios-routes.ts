import { Routes } from "@angular/router";
import { Formulario } from "./pages/Formulario/FormularioPage";
import { FormulariosDinamicos } from './pages/FormulariosDinamicos/FormulariosDinamicos';
import { FormulariosMore } from "./pages/FormulariosMore/FormulariosMore";

export const formulariosRoutes: Routes = [
{
  path: '',
  children: [
      {
        path: 'basic',
        title: 'Formularios Básicos',
        component: Formulario,
      },
      {
        path: 'dynamic',
        title: 'Formularios Dinámicos',
        component: FormulariosDinamicos,
      },
      {
        path: 'more',
        title: 'Formularios Más Complejos',
        component: FormulariosMore,
      },
      {
        path: '**',
        redirectTo: 'basic',
      },
    ],
  },
];