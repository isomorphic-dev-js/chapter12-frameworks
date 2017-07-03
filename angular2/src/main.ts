// polyfills
import 'zone.js/dist/zone';
import 'reflect-metadata';
import 'rxjs/Observable';
import 'rxjs/add/operator/map';
// angular
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// libs
import { bootloader } from '@angularclass/bootloader';
// app
import { AppModule } from './app/app.module';
export function main(): any {
  return platformBrowserDynamic().bootstrapModule(AppModule);
}
bootloader(main);


// import { enableProdMode } from '@angular/core';
// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
//
// import { AppModule } from './app/app.module';
// import { environment } from './environments/environment';
//
// if (environment.production) {
//   enableProdMode();
// }
//
// platformBrowserDynamic().bootstrapModule(AppModule);

