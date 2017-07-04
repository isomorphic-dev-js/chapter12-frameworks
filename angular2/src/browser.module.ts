import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app/app.component';
import { AppModule } from './app/app.module';
import { BrowserTransferStateModule } from './modules/transfer-state/browser-transfer-state.module';


@NgModule({
  imports: [
    BrowserModule.withServerTransition({
      appId: 'ng-universal-example'
    }),
    BrowserTransferStateModule,
    AppModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppBrowserModule { }
