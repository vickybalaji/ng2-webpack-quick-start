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
var weather_service_1 = require("../service/weather.service");
var WeatherListComponent = (function () {
    function WeatherListComponent(_weatherService) {
        this._weatherService = _weatherService;
    }
    WeatherListComponent.prototype.ngOnInit = function () {
        this.weatherItems = this._weatherService.getWeatherData();
    };
    WeatherListComponent = __decorate([
        core_1.Component({
            selector: 'weather-list',
            template: require('./weather-list.component.html'),
            styles: [require('./weather-list.component.css')]
        }), 
        __metadata('design:paramtypes', [weather_service_1.WeatherService])
    ], WeatherListComponent);
    return WeatherListComponent;
}());
exports.WeatherListComponent = WeatherListComponent;
//# sourceMappingURL=weather-list.component.js.map