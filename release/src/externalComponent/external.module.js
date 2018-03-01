"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var external_component_1 = require("./external.component");
var ExternalModule = /** @class */ (function () {
    function ExternalModule() {
    }
    ExternalModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [external_component_1.ExternalComponent],
                    imports: [
                        router_1.RouterModule.forChild([
                            { path: '', component: external_component_1.ExternalComponent, pathMatch: 'full' }
                        ])
                    ]
                },] },
    ];
    /** @nocollapse */
    ExternalModule.ctorParameters = function () { return []; };
    return ExternalModule;
}());
exports.ExternalModule = ExternalModule;
