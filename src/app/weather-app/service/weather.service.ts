import {Injectable} from "@angular/core";
import {WEATHER_DATA} from "../weather-data";
import {Http, RequestOptions, URLSearchParams} from "@angular/http";
import {Observable} from "rxjs";

import "rxjs/Rx";
import {WeatherItem} from "../weather-item/weather-item";

@Injectable() export class WeatherService{
    //
    constructor( private _http: Http ){}
    //
    getWeatherData(){
        return WEATHER_DATA;
    }
    //
    searchWeatherData( cityName: string ): Observable<any>{
        //
        let urlString = "http://api.openweathermap.org/data/2.5/weather";
        //
        let params = new URLSearchParams();
        //
        params.set("q",cityName);
        params.set("units","metric");
        params.set("APPID","82a3c576ed39bfde1c054ddb73f4cec0");

        let options = new RequestOptions({ search : params });
        //
        return this._http.get(urlString, options)
            .map( resp => resp.json() )
            .catch( error => {
                console.log("Error wile fetching Weather Data !!!");
                return error.Observable.throw( error.json() )
            });
    }
    //
    addWeatherData( weatherItem: WeatherItem ){
        WEATHER_DATA.push( weatherItem );
    }
    //
    clearWeatherItems(){
        //
        // splice is default javascript function
        //
        WEATHER_DATA.splice(0);
    }
}