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
var weather_item_1 = require("../weather-item/weather-item");
var rxjs_1 = require("rxjs");
var WeatherSearchComponent = (function () {
    //
    function WeatherSearchComponent(_weatherService) {
        this._weatherService = _weatherService;
        //
        this.searchStream = new rxjs_1.Subject();
        //
        this.data = {};
    }
    //
    WeatherSearchComponent.prototype.onSubmit = function (cityName) {
        //
        console.log(cityName);
        //
        if (this.data.cod == 200) {
            var weatherItem = new weather_item_1.WeatherItem(this.data.name, this.data.weather[0].description, this.data.main.temp);
            //
            this._weatherService.addWeatherData(weatherItem);
        }
        else {
            alert(this.data.message);
        }
    };
    //
    WeatherSearchComponent.prototype.onSearchCity = function (cityName) {
        this.searchStream.next(cityName);
    };
    //
    WeatherSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        //
        // Listener which passes the stream data to searchWeatherData
        //
        this.searchStream
            .debounceTime(300)
            .distinctUntilChanged()
            .switchMap(function (input) { return _this._weatherService.searchWeatherData(input); })
            .subscribe(function (data) {
            _this.data = data;
        }, function (error) {
            alert("Error while fetching data from _weatherService !!!");
            console.log("Error while fetching data from _weatherService !!!");
            console.log("Error msg : >>>> " + error);
        }, function () {
            console.log("Fetched weather data from _weatherService.");
        });
    };
    WeatherSearchComponent = __decorate([
        core_1.Component({
            selector: 'weather-search',
            template: require('./weather-search.component.html'),
            styles: [require('./weather-search.component.css')]
        }), 
        __metadata('design:paramtypes', [weather_service_1.WeatherService])
    ], WeatherSearchComponent);
    return WeatherSearchComponent;
}());
exports.WeatherSearchComponent = WeatherSearchComponent;
//# sourceMappingURL=weather-search.component.js.map