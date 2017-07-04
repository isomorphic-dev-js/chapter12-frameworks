"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
// src/app.server.module.ts
var core_1 = require("@angular/core");
require("rxjs/Rx");
var platform_browser_1 = require("@angular/platform-browser");
var platform_server_1 = require("@angular/platform-server");
// import { ServerPrebootModule } from 'preboot/server';
var server_transfer_state_module_1 = require("./modules/transfer-state/server-transfer-state.module");
var transfer_state_1 = require("./modules/transfer-state/transfer-state");
var app_component_1 = require("./app/app.component");
var app_module_1 = require("./app/app.module");
function onBootstrap(appRef, transferState) {
    return function () {
        appRef.isStable
            .filter(function (stable) { return stable; })
            .first()
            .subscribe(function () {
            transferState.inject();
        });
    };
}
exports.onBootstrap = onBootstrap;
var AppServerModule = (function () {
    function AppServerModule() {
    }
    return AppServerModule;
}());
AppServerModule = __decorate([
    core_1.NgModule({
        providers: [
            {
                provide: core_1.APP_BOOTSTRAP_LISTENER,
                useFactory: onBootstrap,
                multi: true,
                deps: [
                    core_1.ApplicationRef,
                    transfer_state_1.TransferState
                ]
            }
        ],
        imports: [
            platform_server_1.ServerModule,
            platform_browser_1.BrowserModule.withServerTransition({
                appId: 'ng-universal-example'
            }),
            server_transfer_state_module_1.ServerTransferStateModule,
            // ServerPrebootModule.recordEvents({
            //   appRoot: 'app-root'
            // }),
            app_module_1.AppModule
        ],
        bootstrap: [
            app_component_1.AppComponent
        ]
    })
], AppServerModule);
exports.AppServerModule = AppServerModule;
