import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {AppModule} from './app/app.module';
import {environment} from './environments/environment';

export function getBaseUrl() {
  // const baseUrlmocked = 'https://www.virustotal.com/';
  const baseUrlmocked = 'http://localhost:59905/';
  return baseUrlmocked;
  // return document.getElementsByTagName('base')[0].href;
}

const providers = [
  {provide: 'BASE_URL', useFactory: getBaseUrl, deps: []}
];

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic(providers).bootstrapModule(AppModule)
  .catch(err => console.log(err));
