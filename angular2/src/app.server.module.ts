// src/app.server.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ServerModule } from '@angular/platform-server';
import { ServerPrebootModule } from 'preboot/server';
import { AppComponent } from './app/app.component';

@NgModule({
  imports: [
    ServerModule,
    BrowserModule.withServerTransition({
      appId: 'ng-universal-example'
    }),
    ServerPrebootModule.recordEvents({
      appRoot: 'app-root'
    })
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppServerModule {}
