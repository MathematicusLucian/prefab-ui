import { ApplicationConfig, importProvidersFrom, isDevMode } from "@angular/core";
import { provideRouter } from "@angular/router"; //PreloadAllModules, , withPreloading
import { HttpClientModule } from "@angular/common/http";
import { LayoutModule } from "@angular/cdk/layout";
import { provideClientHydration } from "@angular/platform-browser";
import { provideAnimations } from "@angular/platform-browser/animations";
// import { APP_ROUTES } from "../routes/app.routes";
import { RedirectGuard } from "../routes/redirect.guard";
// import { provideStore, provideState } from "@ngrx/store";
// import { itemsReducer, siteGraphFeatureKey } from "../../../../../../prefab-components/core-state/reducers";
import { provideStoreDevtools } from "@ngrx/store-devtools";
import { ScreenTrackingService, UserTrackingService } from "@angular/fire/analytics"; //, getAnalytics, provideAnalytics
// import { initializeApp, provideFirebaseApp } from "@angular/fire/app";
// import { getAuth, provideAuth } from "@angular/fire/auth";
// import { getFirestore, provideFirestore } from "@angular/fire/firestore";
// import { ENV } from "../../../environments/environment";

import { APP_BASE_HREF } from '@angular/common';
import { getSingleSpaExtraProviders } from 'single-spa-angular';
import { EmptyRouteComponent } from './../../empty-route/empty-route.component';

export const appConfig: ApplicationConfig = {
	providers: [
		importProvidersFrom(HttpClientModule),
		// provideRouter(
		// 	APP_ROUTES, 
		// 	withPreloading(PreloadAllModules)
		// ),
		RedirectGuard,
		provideAnimations(),
		importProvidersFrom(LayoutModule),
		provideClientHydration(),
		provideAnimations(),
		// provideStore({ [siteGraphFeatureKey]: itemsReducer }),
		// provideState({ name: "siteGraph", reducer: itemsReducer }),
		provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
		// importProvidersFrom(
		// 	[
		// 		provideFirebaseApp(() => initializeApp(ENV.firebase)),
		// 		provideFirestore(() => getFirestore()),
		// 		provideAnalytics(() => getAnalytics()),
		// 		provideAuth(() => getAuth()),
		// 	]
		// ),
		ScreenTrackingService,
		UserTrackingService,
		getSingleSpaExtraProviders(),
		provideRouter([{ path: '**', component: EmptyRouteComponent }]),
		{ provide: APP_BASE_HREF, useValue: '/' },
	]
};

// {
// 	providers: [
// 		{ provide: APP_BASE_HREF, useValue: '/' },
// 		getSingleSpaExtraProviders(),
// 		provideRouter([{ path: '**', component: EmptyRouteComponent }]),
// 	],
// }