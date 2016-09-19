import {Component, OnInit} from '@angular/core';
import {WeatherService} from "../service/weather.service";
import {WeatherItem} from "../weather-item/weather-item";

import {Subject} from "rxjs";


@Component({
    selector: 'weather-search',
    template: require('./weather-search.component.html'),
    styles : [require('./weather-search.component.css')]
})

export class WeatherSearchComponent implements OnInit{
    //
    private searchStream = new Subject<string>();
    //
    private data: any = {};
    //
    constructor( private _weatherService: WeatherService ){}
    //
    onSubmit(cityName: string){
        //
        console.log( cityName );
        //
        if( this.data.cod == 200 )
        {
            const weatherItem = new WeatherItem( this.data.name, this.data.weather[0].description, this.data.main.temp);
            //
            this._weatherService.addWeatherData( weatherItem );
        }
        else
        {
            alert( this.data.message );
        }
    }
    //
    onSearchCity(cityName:string){
        this.searchStream.next(cityName);
    }
    //
    ngOnInit(){
        //
        // Listener which passes the stream data to searchWeatherData
        //
        this.searchStream
            .debounceTime(300)
            .distinctUntilChanged()
            .switchMap((input:string) => this._weatherService.searchWeatherData(input))
            .subscribe(
                data => {
                    this.data = data;
                },
                error => {
                    alert("Error while fetching data from _weatherService !!!");
                    console.log("Error while fetching data from _weatherService !!!");
                    console.log("Error msg : >>>> "+error);
                },
                () => {
                    console.log("Fetched weather data from _weatherService.");
                }
            );
    }

}
