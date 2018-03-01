"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ExternalComponent = /** @class */ (function () {
    function ExternalComponent() {
    }
    ExternalComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'external-component',
                    template: "<div class=\"content\"><h3>I am external!</h3></div>"
                },] },
    ];
    /** @nocollapse */
    ExternalComponent.ctorParameters = function () { return []; };
    return ExternalComponent;
}());
exports.ExternalComponent = ExternalComponent;
