import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { AppComponent } from './app/app.component';

const ROUTES: Routes = [
  {
    path: 'todo',
    loadComponent: () => import('./app/todo/todo.component'),
  },
];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(ROUTES)],
});
