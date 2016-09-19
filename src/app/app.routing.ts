import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WeatherComponent } from './weather-app/weather-app.component'
import {MyIframeComponent} from "./my-iframe/my-iframe.component";

const appRoutes: Routes = [
    {
        path: 'weather',
        component: WeatherComponent
    },
    {
        path: 'my-iframe',
        component: MyIframeComponent
    },
    {
        path: '',
        redirectTo: '/weather',
        pathMatch: 'full'
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);