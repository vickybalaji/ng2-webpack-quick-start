import {Component, OnInit} from '@angular/core';
import {ProfileService} from "../service/profile.service";
import {WeatherService} from "../service/weather.service";
import {WeatherProfiles} from "./weather-profiles";
import {WeatherItem} from "../weather-item/weather-item";


@Component({
    selector: 'weather-profiles',
    template: require('./weather-profiles.component.html'),
    styles : [require('./weather-profiles.component.css')]
})

export class WeatherProfileComponent implements OnInit{

    constructor( private _profileService: ProfileService, private _weatherService: WeatherService){}
    //
    private profiles: WeatherProfiles[] = [];
    //
    ngOnInit(){
        this.profiles = this._profileService.getProfiles();
    }
    //
    onSaveNew(){
        //
        // map ( Default javascript functions ) iterates with the array
        //
        const cities: string[] = this._weatherService.getWeatherData().map(function (element: WeatherItem) {
            return element.cityName;
        })
        //
        this._profileService.saveNewProfile( cities );
        //
    }
    //
    loadProfileData( profile:WeatherProfiles ){
        this._weatherService.clearWeatherItems();
        //
        for( let cnt = 0, totCnt = profile.cities.length ; cnt < totCnt ; cnt++ )
        {
            this._weatherService.searchWeatherData( profile.cities[cnt] )
                .retry()
                .subscribe(
                    data =>{
                        //
                        if( data.cod == 200 )
                        {
                            const weatherItem = new WeatherItem( data.name, data.weather[0].description, data.main.temp);
                            //
                            this._weatherService.addWeatherData( weatherItem );
                        }
                        else
                        {
                            alert( data.message );
                        }
                    }
            )
        }
    }
    //
    onDeleteProfile(event: Event, profile: WeatherProfiles){
        //
        event.stopPropagation();
        //
        this._profileService.deleteProfile( profile );
    }
}
