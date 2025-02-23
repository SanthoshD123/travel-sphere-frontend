import { ApplicationConfig } from '@angular/core';
import { provideRouter, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./travel-packages/travel-packages.component').then(
        (m) => m.TravelPackagesComponent
      ),
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./about/about.component').then((m) => m.AboutComponent),
  },
  {
    path: 'packages',
    loadComponent: () =>
      import('./travel-packages/travel-packages.component').then(
        (m) => m.TravelPackagesComponent
      ),
  },
];

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)],
};
