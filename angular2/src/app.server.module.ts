// src/app.server.module.ts
import { NgModule, APP_BOOTSTRAP_LISTENER, ApplicationRef } from '@angular/core';
import 'rxjs/Rx';
import { BrowserModule } from '@angular/platform-browser';
import { ServerModule } from '@angular/platform-server';
// import { ServerPrebootModule } from 'preboot/server';
import { ServerTransferStateModule } from './modules/transfer-state/server-transfer-state.module';
import { TransferState } from './modules/transfer-state/transfer-state';
import { AppComponent } from './app/app.component';
import { AppModule } from './app/app.module';


export function onBootstrap(appRef: ApplicationRef, transferState: TransferState) {
  return () => {
    appRef.isStable
      .filter(stable => stable)
      .first()
      .subscribe(() => {
        transferState.inject();
      });
  };
}

@NgModule({
  providers: [
    {
      provide: APP_BOOTSTRAP_LISTENER,
      useFactory: onBootstrap,
      multi: true,
      deps: [
        ApplicationRef,
        TransferState
      ]
    }
  ],
  imports: [
    ServerModule,
    BrowserModule.withServerTransition({
      appId: 'ng-universal-example'
    }),
    ServerTransferStateModule,
    // ServerPrebootModule.recordEvents({
    //   appRoot: 'app-root'
    // }),
    AppModule
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppServerModule {}
