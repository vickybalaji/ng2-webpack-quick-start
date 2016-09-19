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
var profile_service_1 = require("../service/profile.service");
var weather_service_1 = require("../service/weather.service");
var weather_item_1 = require("../weather-item/weather-item");
var WeatherProfileComponent = (function () {
    function WeatherProfileComponent(_profileService, _weatherService) {
        this._profileService = _profileService;
        this._weatherService = _weatherService;
        //
        this.profiles = [];
    }
    //
    WeatherProfileComponent.prototype.ngOnInit = function () {
        this.profiles = this._profileService.getProfiles();
    };
    //
    WeatherProfileComponent.prototype.onSaveNew = function () {
        //
        // map ( Default javascript functions ) iterates with the array
        //
        var cities = this._weatherService.getWeatherData().map(function (element) {
            return element.cityName;
        });
        //
        this._profileService.saveNewProfile(cities);
        //
    };
    //
    WeatherProfileComponent.prototype.loadProfileData = function (profile) {
        var _this = this;
        this._weatherService.clearWeatherItems();
        //
        for (var cnt = 0, totCnt = profile.cities.length; cnt < totCnt; cnt++) {
            this._weatherService.searchWeatherData(profile.cities[cnt])
                .retry()
                .subscribe(function (data) {
                //
                if (data.cod == 200) {
                    var weatherItem = new weather_item_1.WeatherItem(data.name, data.weather[0].description, data.main.temp);
                    //
                    _this._weatherService.addWeatherData(weatherItem);
                }
                else {
                    alert(data.message);
                }
            });
        }
    };
    //
    WeatherProfileComponent.prototype.onDeleteProfile = function (event, profile) {
        //
        event.stopPropagation();
        //
        this._profileService.deleteProfile(profile);
    };
    WeatherProfileComponent = __decorate([
        core_1.Component({
            selector: 'weather-profiles',
            template: require('./weather-profiles.component.html'),
            styles: [require('./weather-profiles.component.css')]
        }), 
        __metadata('design:paramtypes', [profile_service_1.ProfileService, weather_service_1.WeatherService])
    ], WeatherProfileComponent);
    return WeatherProfileComponent;
}());
exports.WeatherProfileComponent = WeatherProfileComponent;
//# sourceMappingURL=weather-profiles.component.js.map