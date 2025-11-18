import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { HomePage } from './features/homePage/homePage';
import { Perfil } from './features/perfilPage/perfilPage';
import { ProyectosDosPage } from './features/proyectos-dos-page/proyectoDos';
import { ProyectosPage } from './features/proyectos-page/proyectos-page';
import { Formulario } from './features/formularios/pages/Formulario/FormularioPage';

export const routes: Routes = [
  {
    path: 'home',
    component: HomePage
  },
  {
    path: 'perfil',
    component: Perfil
  },
  {
    path: 'proyectos',
    component: ProyectosPage
  },
  {
    path: 'proyecto-dos',
    component: ProyectosDosPage
  },
  // {
  //   path: 'formulario',
  //   component: Formulario
  // }
  {
    path: 'formularios',
    loadChildren: () => import('./features/formularios/formularios-routes').then(m => m.formulariosRoutes)
  },
];
