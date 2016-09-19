"use strict";
var router_1 = require('@angular/router');
var weather_app_component_1 = require('./weather-app/weather-app.component');
var my_iframe_component_1 = require("./my-iframe/my-iframe.component");
var appRoutes = [
    {
        path: 'weather',
        component: weather_app_component_1.WeatherComponent
    },
    {
        path: 'my-iframe',
        component: my_iframe_component_1.MyIframeComponent
    },
    {
        path: '',
        redirectTo: '/weather',
        pathMatch: 'full'
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map