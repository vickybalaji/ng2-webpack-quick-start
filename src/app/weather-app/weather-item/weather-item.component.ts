import {Component, Input} from '@angular/core';
import {WeatherItem} from "./weather-item";

@Component({
    selector: 'weather-item',
    template: require('./weather-item.component.html'),
    styles : [require('./weather-item.component.css')]
})

export class WeatherItemComponent {
    //
    @Input('item') private weatherItem: WeatherItem;
    //
}
