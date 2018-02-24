import { Component, Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

class OrgChartComponent {
    constructor() {
        this.hasManager = false;
    }
}
OrgChartComponent.decorators = [
    { type: Component, args: [{
                selector: 'ng-org-chart',
                template: "<oc-employee *ngIf=\"topEmployee\" [employee]=\"topEmployee\" [hasManager]=\"hasManager\"></oc-employee> <div class=\"oc-reports\" *ngIf=\"!topEmployee?.collapsed\"> <ng-container *ngFor=\"let employee of topEmployee?.subordinates; first as isFirst; last as isLast\"> <div class=\"oc-org-container\"> <div class=\"oc-h-bar-container\"> <div class=\"oc-h-bar oc-border\" [style.border-color]=\"isFirst?'transparent':''\"></div> <div class=\"oc-border\"></div> <div class=\"oc-h-bar oc-border\" [style.border-color]=\"isLast?'transparent':''\"></div> </div> <ng-org-chart [topEmployee]=\"employee\" [hasManager]=\"true\"></ng-org-chart> </div> </ng-container> </div>",
                styles: [":host { display: flex; flex-direction: column; align-items: center; } .oc-reports { display: flex; flex: 1; } .oc-org-container { display: flex; flex-direction: column; } .oc-h-bar-container { display: flex; } .oc-h-bar { flex: 1; } "]
            },] },
];
/**
 * @nocollapse
 */
OrgChartComponent.ctorParameters = () => [];
OrgChartComponent.propDecorators = {
    'topEmployee': [{ type: Input },],
    'hasManager': [{ type: Input },],
};

class EmployeeComponent {
    constructor() {
        this.hasManager = false;
    }
}
EmployeeComponent.decorators = [
    { type: Component, args: [{
                selector: 'oc-employee',
                template: "<div class=\"oc-h-bar oc-border\" *ngIf=\"hasManager\"></div> <div class=\"oc-box oc-border oc-background\"> <div class=\"oc-name\">{{employee?.name}}</div> <div class=\"oc-designation\">{{employee?.designation}}</div> <div class=\"oc-collapse\" *ngIf=\"employee?.subordinates.length\" (click)=\"employee.collapsed = !employee.collapsed\"> <span *ngIf=\"employee.collapsed\">+</span> <span *ngIf=\"!employee.collapsed\">&minus;</span> </div> </div> <div class=\"oc-h-bar oc-border\" *ngIf=\"!employee?.collapsed && employee?.subordinates.length\"></div>",
                styles: [":host { margin: 0 1em; display: flex; flex-direction: column; align-items: center; } .oc-box { padding: 0.25em 1em; display: flex; flex-direction: column; align-items: center; } .oc-h-bar { height: 0.5em; } "]
            },] },
];
/**
 * @nocollapse
 */
EmployeeComponent.ctorParameters = () => [];
EmployeeComponent.propDecorators = {
    'employee': [{ type: Input },],
    'hasManager': [{ type: Input },],
};

class OrgChartModule {
}
OrgChartModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule
                ],
                declarations: [OrgChartComponent, EmployeeComponent],
                exports: [OrgChartComponent]
            },] },
];
/**
 * @nocollapse
 */
OrgChartModule.ctorParameters = () => [];

/**
 * Generated bundle index. Do not edit.
 */

export { OrgChartComponent, OrgChartModule, EmployeeComponent as ɵa };
//# sourceMappingURL=ng-org-chart.js.map
