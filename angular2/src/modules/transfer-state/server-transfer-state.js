"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var transfer_state_1 = require("./transfer-state");
var ServerTransferState = (function (_super) {
    __extends(ServerTransferState, _super);
    function ServerTransferState(state, rendererFactory) {
        var _this = _super.call(this) || this;
        _this.state = state;
        _this.rendererFactory = rendererFactory;
        return _this;
    }
    /**
     * Inject the State into the bottom of the <head>
     */
    ServerTransferState.prototype.inject = function () {
        try {
            var document_1 = this.state.getDocument();
            var transferStateString = JSON.stringify(this.toJson());
            var renderer = this.rendererFactory.createRenderer(document_1, {
                id: '-1',
                encapsulation: core_1.ViewEncapsulation.None,
                styles: [],
                data: {}
            });
            var head = document_1.head;
            if (head.name !== 'head') {
                throw new Error('Please have <head> as the first element in your document');
            }
            var script = renderer.createElement('script');
            renderer.setValue(script, "window['TRANSFER_STATE'] = " + transferStateString);
            renderer.appendChild(head, script);
        }
        catch (e) {
            console.error(e);
        }
    };
    return ServerTransferState;
}(transfer_state_1.TransferState));
ServerTransferState = __decorate([
    core_1.Injectable()
], ServerTransferState);
exports.ServerTransferState = ServerTransferState;
