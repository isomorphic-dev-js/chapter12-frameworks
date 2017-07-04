"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var TransferState = (function () {
    function TransferState() {
        this._map = new Map();
    }
    TransferState.prototype.keys = function () {
        return this._map.keys();
    };
    TransferState.prototype.get = function (key) {
        return this._map.get(key);
    };
    TransferState.prototype.set = function (key, value) {
        return this._map.set(key, value);
    };
    TransferState.prototype.toJson = function () {
        var _this = this;
        var obj = {};
        Array.from(this.keys())
            .forEach(function (key) {
            obj[key] = _this.get(key);
        });
        return obj;
    };
    TransferState.prototype.initialize = function (obj) {
        var _this = this;
        Object.keys(obj)
            .forEach(function (key) {
            _this.set(key, obj[key]);
        });
    };
    TransferState.prototype.inject = function () { };
    return TransferState;
}());
TransferState = __decorate([
    core_1.Injectable()
], TransferState);
exports.TransferState = TransferState;
