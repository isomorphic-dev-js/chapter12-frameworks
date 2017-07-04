"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var PostsListComponent = (function () {
    function PostsListComponent(postsService) {
        this.postsService = postsService;
        this.posts = [];
    }
    PostsListComponent.prototype.ngOnInit = function () {
        var _this = this;
        var postsSub = this.postsService.getPosts();
        this.subscription = postsSub.subscribe(function (posts) {
            _this.posts = posts;
            console.log("posts", _this.posts);
        });
    };
    PostsListComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    return PostsListComponent;
}());
PostsListComponent = __decorate([
    core_1.Component({
        selector: 'app-posts-list',
        templateUrl: './posts-list.component.html',
        styleUrls: ['./posts-list.component.css']
    })
], PostsListComponent);
exports.PostsListComponent = PostsListComponent;
