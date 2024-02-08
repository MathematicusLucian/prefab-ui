import { bootstrapApplication } from "@angular/platform-browser";
import { appConfig } from "./app/core/config/app.config";
import { AppComponent } from "./app/app.component";

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { ENV } from './environments/environment';

if (ENV.production) {
    enableProdMode();
}

bootstrapApplication(AppComponent,appConfig).catch((err) => console.error(err));
// platformBrowserDynamic().bootstrapModule(AppModule).catch(err => console.error(err));