import { ApplicationConfig, importProvidersFrom, isDevMode } from "@angular/core";
import { 
	PreloadAllModules, 
	provideRouter, 
	withDebugTracing, 
	withPreloading, 
	withRouterConfig 
} 
	from "@angular/router";
import { HttpClientModule, provideHttpClient, withFetch } from "@angular/common/http";
import { LayoutModule } from "@angular/cdk/layout";
import { provideClientHydration } from "@angular/platform-browser";
import { provideAnimations } from "@angular/platform-browser/animations";
import { APP_ROUTES } from "../routes/app.routes";
import { RedirectGuard } from "../routes/redirect.guard";
import { 
	provideStore,
	provideState
} from "@ngrx/store";
import { itemsReducer, siteGraphFeatureKey } from "../../shared/core-state/reducers";
import { provideStoreDevtools } from "@ngrx/store-devtools";
import {
	ScreenTrackingService,
	UserTrackingService,
	getAnalytics,
	provideAnalytics,
} from "@angular/fire/analytics";
import { initializeApp, provideFirebaseApp } from "@angular/fire/app";
import { getAuth, provideAuth } from "@angular/fire/auth";
import { connectFirestoreEmulator, enableIndexedDbPersistence, getFirestore, provideFirestore } from "@angular/fire/firestore";
import { getFunctions, provideFunctions } from "@angular/fire/functions";
import { getMessaging, provideMessaging } from "@angular/fire/messaging";
import { getPerformance, providePerformance } from "@angular/fire/performance";
import { getStorage, provideStorage } from "@angular/fire/storage";
import { AngularFireModule } from "angularfire2";
// import { AngularFirestoreModule } from 'angularfire2/firestore';
import { ENV } from "./../../../environments/environment";

export const appConfig: ApplicationConfig = {
	// provideHttpClient(withFetch())
	providers: [
		importProvidersFrom(HttpClientModule),
		provideRouter(
			APP_ROUTES, 
			withPreloading(PreloadAllModules)
			//withDebugTracing()
		),
		RedirectGuard,
		provideAnimations(),
		importProvidersFrom(LayoutModule),
		provideClientHydration(),
		provideAnimations(),
		provideStore({ [siteGraphFeatureKey]: itemsReducer }),
		provideState({ name: "siteGraph", reducer: itemsReducer }),
		provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
		importProvidersFrom(
			[
				provideFirebaseApp(() => initializeApp(ENV.firebase)),
				provideFirestore(() => getFirestore()),
				provideAnalytics(() => getAnalytics()),
				provideAuth(() => getAuth()),
			]
		),
		ScreenTrackingService,
		UserTrackingService,
	]
};