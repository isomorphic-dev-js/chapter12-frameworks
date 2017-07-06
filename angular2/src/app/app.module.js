"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var transfer_http_module_1 = require("../modules/transfer-http/transfer-http.module");
var router_1 = require("@angular/router");
var app_component_1 = require("./app.component");
var post_list_component_1 = require("./post-list/post-list.component");
var comment_component_1 = require("./comment/comment.component");
var post_component_1 = require("./post/post.component");
var post_detail_component_1 = require("./post-detail/post-detail.component");
var comments_service_1 = require("./services/comments.service");
var posts_service_1 = require("./services/posts.service");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            app_component_1.AppComponent,
            post_list_component_1.PostListComponent,
            comment_component_1.CommentComponent,
            post_component_1.PostComponent,
            post_detail_component_1.PostDetailComponent
        ],
        imports: [
            transfer_http_module_1.TransferHttpModule,
            common_1.CommonModule,
            router_1.RouterModule.forRoot([
                {
                    path: '',
                    component: post_list_component_1.PostListComponent
                },
                {
                    path: 'post/:id',
                    component: post_detail_component_1.PostDetailComponent
                }
            ])
        ],
        providers: [
            comments_service_1.CommentsService,
            posts_service_1.PostsService
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
