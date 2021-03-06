"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var weather_item_1 = require("./weather-item");
var WeatherItemComponent = (function () {
    function WeatherItemComponent() {
    }
    __decorate([
        core_1.Input('item'), 
        __metadata('design:type', weather_item_1.WeatherItem)
    ], WeatherItemComponent.prototype, "weatherItem", void 0);
    WeatherItemComponent = __decorate([
        core_1.Component({
            selector: 'weather-item',
            template: require('./weather-item.component.html'),
            styles: [require('./weather-item.component.css')]
        }), 
        __metadata('design:paramtypes', [])
    ], WeatherItemComponent);
    return WeatherItemComponent;
}());
exports.WeatherItemComponent = WeatherItemComponent;
//# sourceMappingURL=weather-item.component.js.map