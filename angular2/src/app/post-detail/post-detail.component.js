"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var post_1 = require("../post");
var PostDetailComponent = (function () {
    function PostDetailComponent(commentsService, postsService, route) {
        this.commentsService = commentsService;
        this.postsService = postsService;
        this.route = route;
        this.comments = [];
        this.post = new post_1.Post();
    }
    PostDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.routeSubscription = this.route.params.subscribe(function (params) {
            var postsSub = _this.postsService.getPostByUrlSlug(params.id);
            _this.postSubscription = postsSub.subscribe(function (post) {
                _this.post = post;
                console.log("post", _this.post);
                var commentsSub = _this.commentsService.getCommentsForPost(_this.post.id);
                _this.commentSubscription = commentsSub.subscribe(function (comments) {
                    _this.comments = comments;
                    console.log("post", _this.comments);
                });
            });
        });
    };
    PostDetailComponent.prototype.ngOnDestroy = function () {
        this.postSubscription.unsubscribe();
        this.commentSubscription.unsubscribe();
        this.routeSubscription.unsubscribe();
    };
    return PostDetailComponent;
}());
PostDetailComponent = __decorate([
    core_1.Component({
        selector: 'app-post-detail',
        templateUrl: './post-detail.component.html',
        styleUrls: ['./post-detail.component.css']
    })
], PostDetailComponent);
exports.PostDetailComponent = PostDetailComponent;
