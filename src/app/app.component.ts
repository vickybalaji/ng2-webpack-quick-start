import { Component } from '@angular/core';
import '../../public/css/styles.css';


@Component({
    selector: 'my-app',
    template: require('./app.component.html'),
    styles : [require('./app.component.css')]
})
export class AppComponent {
    //
    selectedTab: string = "weather";
    //
    changeSelectedTab( tabName: string ){
        this.selectedTab = tabName;
    }
}
