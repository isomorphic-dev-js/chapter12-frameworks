"use strict";
/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
/* tslint:disable */
exports.__esModule = true;
var i0 = require("@angular/core");
var i1 = require("./app.server.module");
var i2 = require("./app/app.component");
var i3 = require("./app/post-list/post-list.component.ngfactory");
var i4 = require("./app/post-detail/post-detail.component.ngfactory");
var i5 = require("./app/app.component.ngfactory");
var i6 = require("@angular/http");
var i7 = require("@angular/platform-server");
var i8 = require("@angular/common");
var i9 = require("@angular/platform-browser");
var i10 = require("@angular/animations/browser");
var i11 = require("@angular/platform-browser/animations");
var i12 = require("@angular/animations");
var i13 = require("./modules/transfer-state/transfer-state");
var i14 = require("./modules/transfer-state/server-transfer-state");
var i15 = require("./modules/transfer-http/transfer-http");
var i16 = require("@angular/router");
var i17 = require("./app/services/comments.service");
var i18 = require("./app/services/posts.service");
var i19 = require("./modules/transfer-state/server-transfer-state.module");
var i20 = require("./modules/transfer-http/transfer-http.module");
var i21 = require("./app/post-list/post-list.component");
var i22 = require("./app/post-detail/post-detail.component");
var i23 = require("./app/app.module");
exports.AppServerModuleNgFactory = i0.ɵcmf(i1.AppServerModule, [i2.AppComponent], function (_l) {
    return i0.ɵmod([i0.ɵmpd(512, i0.ComponentFactoryResolver, i0.ɵCodegenComponentFactoryResolver, [[8, [i3.PostListComponentNgFactory, i4.PostDetailComponentNgFactory, i5.AppComponentNgFactory]],
            [3, i0.ComponentFactoryResolver], i0.NgModuleRef]), i0.ɵmpd(4608, i6.BrowserXhr, i7.ɵc, []), i0.ɵmpd(4608, i6.ResponseOptions, i6.BaseResponseOptions, []), i0.ɵmpd(4608, i6.XSRFStrategy, i7.ɵd, []), i0.ɵmpd(4608, i6.XHRBackend, i6.XHRBackend, [i6.BrowserXhr, i6.ResponseOptions, i6.XSRFStrategy]),
        i0.ɵmpd(4608, i6.RequestOptions, i6.BaseRequestOptions, []), i0.ɵmpd(5120, i6.Http, i7.ɵe, [i6.XHRBackend, i6.RequestOptions]), i0.ɵmpd(5120, i0.LOCALE_ID, i0.ɵm, [[3, i0.LOCALE_ID]]), i0.ɵmpd(4608, i8.NgLocalization, i8.NgLocaleLocalization, [i0.LOCALE_ID]), i0.ɵmpd(5120, i0.IterableDiffers, i0.ɵk, []),
        i0.ɵmpd(5120, i0.KeyValueDiffers, i0.ɵl, []), i0.ɵmpd(4608, i9.DomSanitizer, i9.ɵe, [i9.DOCUMENT]), i0.ɵmpd(6144, i0.Sanitizer, null, [i9.DomSanitizer]),
        i0.ɵmpd(4608, i9.HAMMER_GESTURE_CONFIG, i9.HammerGestureConfig, []),
        i0.ɵmpd(5120, i9.EVENT_MANAGER_PLUGINS, function (p0_0, p1_0, p2_0, p2_1) {
            return [new i9.ɵDomEventsPlugin(p0_0), new i9.ɵKeyEventsPlugin(p1_0), new i9.ɵHammerGesturesPlugin(p2_0, p2_1)];
        }, [i9.DOCUMENT, i9.DOCUMENT, i9.DOCUMENT, i9.HAMMER_GESTURE_CONFIG]), i0.ɵmpd(4608, i9.EventManager, i9.EventManager, [i9.EVENT_MANAGER_PLUGINS, i0.NgZone]),
        i0.ɵmpd(135680, i9.ɵDomSharedStylesHost, i9.ɵDomSharedStylesHost, [i9.DOCUMENT]),
        i0.ɵmpd(4608, i9.ɵDomRendererFactory2, i9.ɵDomRendererFactory2, [i9.EventManager,
            i9.ɵDomSharedStylesHost]), i0.ɵmpd(4608, i7.ɵb, i7.ɵb, [i9.DOCUMENT, [2, i9.ɵTRANSITION_ID]]),
        i0.ɵmpd(6144, i9.ɵSharedStylesHost, null, [i7.ɵb]), i0.ɵmpd(4608, i7.ɵServerRendererFactory2, i7.ɵServerRendererFactory2, [i0.NgZone, i9.DOCUMENT, i9.ɵSharedStylesHost]),
        i0.ɵmpd(4608, i10.AnimationDriver, i10.ɵNoopAnimationDriver, []),
        i0.ɵmpd(5120, i10.ɵAnimationStyleNormalizer, i11.ɵd, []), i0.ɵmpd(4608, i10.ɵAnimationEngine, i11.ɵb, [i10.AnimationDriver, i10.ɵAnimationStyleNormalizer]),
        i0.ɵmpd(5120, i0.RendererFactory2, i7.ɵa, [i7.ɵServerRendererFactory2, i10.ɵAnimationEngine,
            i0.NgZone]), i0.ɵmpd(4352, i0.Testability, null, []),
        i0.ɵmpd(4608, i9.Meta, i9.Meta, [i9.DOCUMENT]), i0.ɵmpd(4608, i9.Title, i9.Title, [i9.DOCUMENT]), i0.ɵmpd(4608, i12.AnimationBuilder, i11.ɵBrowserAnimationBuilder, [i0.RendererFactory2]), i0.ɵmpd(4608, i13.TransferState, i14.ServerTransferState, [i7.PlatformState, i0.RendererFactory2]), i0.ɵmpd(4608, i15.TransferHttp, i15.TransferHttp, [i6.Http, i13.TransferState]), i0.ɵmpd(5120, i16.ActivatedRoute, i16.ɵf, [i16.Router]), i0.ɵmpd(4608, i16.NoPreloading, i16.NoPreloading, []), i0.ɵmpd(6144, i16.PreloadingStrategy, null, [i16.NoPreloading]),
        i0.ɵmpd(135680, i16.RouterPreloader, i16.RouterPreloader, [i16.Router, i0.NgModuleFactoryLoader,
            i0.Compiler, i0.Injector, i16.PreloadingStrategy]), i0.ɵmpd(4608, i16.PreloadAllModules, i16.PreloadAllModules, []), i0.ɵmpd(5120, i16.ROUTER_INITIALIZER, i16.ɵi, [i16.ɵg]), i0.ɵmpd(5120, i0.APP_BOOTSTRAP_LISTENER, function (p0_0, p1_0, p1_1) {
            return [p0_0, i1.onBootstrap(p1_0, p1_1)];
        }, [i16.ROUTER_INITIALIZER, i0.ApplicationRef, i13.TransferState]), i0.ɵmpd(4608, i17.CommentsService, i17.CommentsService, []), i0.ɵmpd(4608, i18.PostsService, i18.PostsService, [i15.TransferHttp]), i0.ɵmpd(512, i6.HttpModule, i6.HttpModule, []), i0.ɵmpd(512, i8.CommonModule, i8.CommonModule, []), i0.ɵmpd(1024, i0.ErrorHandler, i9.ɵa, []), i0.ɵmpd(1024, i0.NgProbeToken, function () {
            return [i16.ɵb()];
        }, []), i0.ɵmpd(512, i16.ɵg, i16.ɵg, [i0.Injector]), i0.ɵmpd(256, i0.APP_ID, 'ng-universal-example', []), i0.ɵmpd(2048, i9.ɵTRANSITION_ID, null, [i0.APP_ID]), i0.ɵmpd(1024, i0.APP_INITIALIZER, function (p0_0, p0_1, p1_0, p2_0, p2_1, p2_2) {
            return [i9.ɵc(p0_0, p0_1), i16.ɵh(p1_0), i9.ɵf(p2_0, p2_1, p2_2)];
        }, [[2, i9.NgProbeToken], [2, i0.NgProbeToken], i16.ɵg, i9.ɵTRANSITION_ID, i9.DOCUMENT,
            i0.Injector]), i0.ɵmpd(512, i0.ApplicationInitStatus, i0.ApplicationInitStatus, [[2, i0.APP_INITIALIZER]]), i0.ɵmpd(131584, i0.ɵe, i0.ɵe, [i0.NgZone, i0.ɵConsole,
            i0.Injector, i0.ErrorHandler, i0.ComponentFactoryResolver, i0.ApplicationInitStatus]),
        i0.ɵmpd(2048, i0.ApplicationRef, null, [i0.ɵe]), i0.ɵmpd(512, i0.ApplicationModule, i0.ApplicationModule, [i0.ApplicationRef]), i0.ɵmpd(512, i9.BrowserModule, i9.BrowserModule, [[3, i9.BrowserModule]]), i0.ɵmpd(512, i11.NoopAnimationsModule, i11.NoopAnimationsModule, []), i0.ɵmpd(512, i7.ServerModule, i7.ServerModule, []), i0.ɵmpd(512, i19.ServerTransferStateModule, i19.ServerTransferStateModule, []), i0.ɵmpd(512, i20.TransferHttpModule, i20.TransferHttpModule, []), i0.ɵmpd(1024, i16.ɵa, i16.ɵd, [[3,
                i16.Router]]), i0.ɵmpd(512, i16.UrlSerializer, i16.DefaultUrlSerializer, []), i0.ɵmpd(512, i16.ChildrenOutletContexts, i16.ChildrenOutletContexts, []), i0.ɵmpd(256, i16.ROUTER_CONFIGURATION, {}, []),
        i0.ɵmpd(1024, i8.LocationStrategy, i16.ɵc, [i8.PlatformLocation, [2, i8.APP_BASE_HREF],
            i16.ROUTER_CONFIGURATION]), i0.ɵmpd(512, i8.Location, i8.Location, [i8.LocationStrategy]),
        i0.ɵmpd(512, i0.Compiler, i0.Compiler, []), i0.ɵmpd(512, i0.NgModuleFactoryLoader, i0.SystemJsNgModuleLoader, [i0.Compiler, [2, i0.SystemJsNgModuleLoaderConfig]]),
        i0.ɵmpd(1024, i16.ROUTES, function () {
            return [[{ path: '', component: i21.PostListComponent }, { path: 'post/:id', component: i22.PostDetailComponent }]];
        }, []), i0.ɵmpd(1024, i16.Router, i16.ɵe, [i0.ApplicationRef, i16.UrlSerializer,
            i16.ChildrenOutletContexts, i8.Location, i0.Injector, i0.NgModuleFactoryLoader,
            i0.Compiler, i16.ROUTES, i16.ROUTER_CONFIGURATION, [2, i16.UrlHandlingStrategy],
            [2, i16.RouteReuseStrategy]]), i0.ɵmpd(512, i16.RouterModule, i16.RouterModule, [[2, i16.ɵa], [2, i16.Router]]), i0.ɵmpd(512, i23.AppModule, i23.AppModule, []), i0.ɵmpd(512, i1.AppServerModule, i1.AppServerModule, [])]);
});
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiL1VzZXJzL2VseXNla29sa2VyL2Rldi9wZXJzb25hbC9jaGFwdGVyLTEyLWZyYW1ld29ya3MvYW5ndWxhcjIvc3JjL2FwcC5zZXJ2ZXIubW9kdWxlLm5nZmFjdG9yeS50cyIsInZlcnNpb24iOjMsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5nOi8vL1VzZXJzL2VseXNla29sa2VyL2Rldi9wZXJzb25hbC9jaGFwdGVyLTEyLWZyYW1ld29ya3MvYW5ndWxhcjIvc3JjL2FwcC5zZXJ2ZXIubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIiAiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
