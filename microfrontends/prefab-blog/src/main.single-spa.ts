
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { config } from "./app/core/config/app.config.server";

import { enableProdMode, NgZone } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { singleSpaAngular } from 'single-spa-angular';
import { singleSpaPropsSubject } from './single-spa/single-spa-props';
import { ENV } from './environments/environment';

if (ENV.production) {
  enableProdMode();
}

const lifecycles = singleSpaAngular({
  bootstrapFunction: (singleSpaProps) => {
    singleSpaPropsSubject.next(singleSpaProps);
    return bootstrapApplication(AppComponent, config);
  },
  // template: '<app-root />',
  template: '<prefab-blog-root />',
  Router,
  NavigationStart,
  // NgZone,
  NgZone: NgZone,
});

// const bootstrap = () => bootstrapApplication(AppComponent, config);
// export default bootstrap;
export const bootstrap = lifecycles.bootstrap;
export const mount = lifecycles.mount;
export const unmount = lifecycles.unmount;