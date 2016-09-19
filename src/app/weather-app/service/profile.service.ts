import {Injectable} from "@angular/core";
import {PROFILE_DATA} from "../profile-data";
import { WeatherProfiles } from "../weather-profiles/weather-profiles"

@Injectable()
export class ProfileService{
    //
    saveNewProfile(cities:string[]){
        const profileName = 'Profile - ' + PROFILE_DATA.length;
        PROFILE_DATA.push( new WeatherProfiles(profileName,cities));
    }
    //
    getProfiles(){
        return PROFILE_DATA;
    }
    //
    deleteProfile( profile: WeatherProfiles ){
        //
        // We can splice a structure
        //
        PROFILE_DATA.splice(PROFILE_DATA.indexOf(profile),1);
    }
}