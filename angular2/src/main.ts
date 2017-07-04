// polyfills
import 'zone.js/dist/zone';
import 'reflect-metadata';
import 'rxjs/Observable';
import 'rxjs/add/operator/map';
// angular
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// app
import { AppBrowserModule } from './browser.module';

platformBrowserDynamic().bootstrapModule(AppBrowserModule);

