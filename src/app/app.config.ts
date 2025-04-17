import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { providePrimeNG } from 'PrimeNG/config';
// import { providePrimeNG } from 'primeng/config'; 
import { BadgeModule } from 'primeng/badge';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import Aura from '@primeng/themes/aura';
import { HttpClientModule } from '@angular/common/http';
// import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
 
export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(HttpClientModule),
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes), 
    provideClientHydration(withEventReplay()),
    providePrimeNG({
      theme: {
          preset: Aura
      }
  })
  ]
};
