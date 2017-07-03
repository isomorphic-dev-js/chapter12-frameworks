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
var platform_browser_1 = require("@angular/platform-browser");
var platform_server_1 = require("@angular/platform-server");
var server_1 = require("preboot/server");
var app_component_1 = require("./app/app.component");
var AppServerModule = (function () {
    function AppServerModule() {
    }
    return AppServerModule;
}());
AppServerModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_server_1.ServerModule,
            platform_browser_1.BrowserModule.withServerTransition({
                appId: 'ng-universal-example'
            }),
            server_1.ServerPrebootModule.recordEvents({
                appRoot: 'app-root'
            })
        ],
        bootstrap: [
            app_component_1.AppComponent
        ]
    })
], AppServerModule);
exports.AppServerModule = AppServerModule;
