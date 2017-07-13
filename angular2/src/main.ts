// polyfills
import 'zone.js/dist/zone';
import 'reflect-metadata';
import 'rxjs/Observable';
import 'rxjs/add/operator/map';
// angular
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// app
import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule);

