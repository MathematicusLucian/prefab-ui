import { ApplicationConfig, importProvidersFrom, isDevMode } from '@angular/core';
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
import { APP_ROUTES } from '../routes/app.routes';
import { RedirectGuard } from '../routes/redirect.guard';
import { 
  provideStore,
  provideState
} from '@ngrx/store';
import { itemsReducer, siteGraphFeatureKey } from '../../shared/core-state/reducers';
import { cardblockFeatureKey, cardblockReducer } from '../../components/cardblock/state/cardblock.reducers';
import { provideStoreDevtools } from '@ngrx/store-devtools';

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(HttpClientModule),
    provideRouter(APP_ROUTES, withPreloading(PreloadAllModules), withDebugTracing()),
    RedirectGuard,
    provideAnimations(),
    importProvidersFrom(LayoutModule),
    provideClientHydration(),
    provideAnimations(),
    provideStore({ [siteGraphFeatureKey]: itemsReducer }),
    provideState({ name: 'siteGraph', reducer: itemsReducer }),
    provideStore({ [cardblockFeatureKey]: cardblockReducer }),
    provideState({ name: 'loading', reducer: cardblockReducer }),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() })
]
};