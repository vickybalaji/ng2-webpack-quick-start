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
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var app_component_1 = require('./app.component');
var weather_app_component_1 = require('./weather-app/weather-app.component');
var weather_item_component_1 = require('./weather-app/weather-item/weather-item.component');
var weather_list_component_1 = require('./weather-app/weather-list/weather-list.component');
var weather_service_1 = require("./weather-app/service/weather.service");
var weather_search_component_1 = require("./weather-app/weather-search/weather-search.component");
var weather_profiles_component_1 = require("./weather-app/weather-profiles/weather-profiles.component");
var profile_service_1 = require("./weather-app/service/profile.service");
var my_iframe_component_1 = require("./my-iframe/my-iframe.component");
var app_routing_1 = require("./app.routing");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                weather_app_component_1.WeatherComponent,
                weather_item_component_1.WeatherItemComponent,
                weather_list_component_1.WeatherListComponent,
                weather_search_component_1.WeatherSearchComponent,
                weather_profiles_component_1.WeatherProfileComponent,
                my_iframe_component_1.MyIframeComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                http_1.JsonpModule,
                app_routing_1.routing
            ],
            providers: [weather_service_1.WeatherService, profile_service_1.ProfileService],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map