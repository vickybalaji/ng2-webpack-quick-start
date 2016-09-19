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
var core_1 = require("@angular/core");
var weather_data_1 = require("../weather-data");
var http_1 = require("@angular/http");
require("rxjs/Rx");
var WeatherService = (function () {
    //
    function WeatherService(_http) {
        this._http = _http;
    }
    //
    WeatherService.prototype.getWeatherData = function () {
        return weather_data_1.WEATHER_DATA;
    };
    //
    WeatherService.prototype.searchWeatherData = function (cityName) {
        //
        var urlString = "http://api.openweathermap.org/data/2.5/weather";
        //
        var params = new http_1.URLSearchParams();
        //
        params.set("q", cityName);
        params.set("units", "metric");
        params.set("APPID", "82a3c576ed39bfde1c054ddb73f4cec0");
        var options = new http_1.RequestOptions({ search: params });
        //
        return this._http.get(urlString, options)
            .map(function (resp) { return resp.json(); })
            .catch(function (error) {
            console.log("Error wile fetching Weather Data !!!");
            return error.Observable.throw(error.json());
        });
    };
    //
    WeatherService.prototype.addWeatherData = function (weatherItem) {
        weather_data_1.WEATHER_DATA.push(weatherItem);
    };
    //
    WeatherService.prototype.clearWeatherItems = function () {
        //
        // splice is default javascript function
        //
        weather_data_1.WEATHER_DATA.splice(0);
    };
    WeatherService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], WeatherService);
    return WeatherService;
}());
exports.WeatherService = WeatherService;
//# sourceMappingURL=weather.service.js.map