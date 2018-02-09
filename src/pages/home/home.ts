import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WeatherProvider } from '../../providers/weather/weather';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  weather: any;
  location: {
    city:string,
    state:string
  }

  constructor(public navCtrl: NavController, private weatherProvider:WeatherProvider) {  
   	// navigator.geolocation.getCurrentPosition(function(location){
   	// 	// this.getWeather(location.coords.latitude, location.coords.longitude);
   	// }); 
  }


  ionViewWillEnter(){
    this.location = {
      city: 'Miami',
      state: 'FL'
    }
    this.weatherProvider.getWeather(this.location.city, this.location.state).subscribe(weather => {
        this.weather = weather.current_observation;
    });
  }

}
