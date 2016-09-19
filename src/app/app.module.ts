import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';




import { AppComponent } from './app.component';
import { WeatherComponent } from './weather-app/weather-app.component';
import { WeatherItemComponent } from './weather-app/weather-item/weather-item.component';
import { WeatherListComponent } from './weather-app/weather-list/weather-list.component';
import {WeatherService} from "./weather-app/service/weather.service";
import {WeatherSearchComponent} from "./weather-app/weather-search/weather-search.component";
import {WeatherProfileComponent} from "./weather-app/weather-profiles/weather-profiles.component";
import {ProfileService} from "./weather-app/service/profile.service";
import {MyIframeComponent} from "./my-iframe/my-iframe.component";
import {routing} from "./app.routing";



@NgModule({
    declarations: [
        AppComponent,
        WeatherComponent,
        WeatherItemComponent,
        WeatherListComponent,
        WeatherSearchComponent,
        WeatherProfileComponent,
        MyIframeComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        JsonpModule,
        routing
    ],
    providers:[ WeatherService, ProfileService ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
