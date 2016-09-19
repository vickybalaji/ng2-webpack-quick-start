import {Component, OnInit} from '@angular/core';
import {WeatherItem} from "../weather-item/weather-item";
import {WEATHER_DATA} from "../weather-data";
import {WeatherService} from "../service/weather.service";

@Component({
    selector: 'weather-list',
    template: require('./weather-list.component.html'),
    styles : [require('./weather-list.component.css')]
})

export class WeatherListComponent implements OnInit {
    weatherItems: WeatherItem[];

    constructor( private _weatherService: WeatherService ){}

    ngOnInit():any {
        this.weatherItems = this._weatherService.getWeatherData();
    }
}
