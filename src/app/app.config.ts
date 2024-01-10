import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { 
  PreloadAllModules, 
  provideRouter, 
  withDebugTracing, 
  withPreloading, 
  withRouterConfig 
} 
from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { LayoutModule } from '@angular/cdk/layout';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { APP_ROUTES } from './app.routes';
import { RedirectGuard } from './redirect.guard';

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(HttpClientModule),
    provideRouter(APP_ROUTES, withPreloading(PreloadAllModules), withDebugTracing()),
    RedirectGuard,
    provideAnimations(),
    importProvidersFrom(LayoutModule), 
    provideClientHydration(), 
    provideAnimations()
  ]
};