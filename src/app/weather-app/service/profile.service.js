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
var profile_data_1 = require("../profile-data");
var weather_profiles_1 = require("../weather-profiles/weather-profiles");
var ProfileService = (function () {
    function ProfileService() {
    }
    //
    ProfileService.prototype.saveNewProfile = function (cities) {
        var profileName = 'Profile - ' + profile_data_1.PROFILE_DATA.length;
        profile_data_1.PROFILE_DATA.push(new weather_profiles_1.WeatherProfiles(profileName, cities));
    };
    //
    ProfileService.prototype.getProfiles = function () {
        return profile_data_1.PROFILE_DATA;
    };
    //
    ProfileService.prototype.deleteProfile = function (profile) {
        //
        // We can splice a structure
        //
        profile_data_1.PROFILE_DATA.splice(profile_data_1.PROFILE_DATA.indexOf(profile), 1);
    };
    ProfileService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], ProfileService);
    return ProfileService;
}());
exports.ProfileService = ProfileService;
//# sourceMappingURL=profile.service.js.map