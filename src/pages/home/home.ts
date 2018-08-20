import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Observable } from 'rxjs';

// Epochs (in milliseconds, 1000ms=1s)
const epochs: any = {
    'year': 31536000000,
    'month': 2592000000,
    'day': 86400000,
    'hour': 3600000,
    'minute': 60000,
    'second': 1000
};

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  startDate: number = new Date(1987, 12, 17).getTime();

  diff: number = 0;
  milliseconds: number = 0;
  seconds: number = 0;
  minutes: number = 0;
  hours: number = 0;
  days: number = 0;
  months: number = 0;
  years: number = 0;

  constructor(public navCtrl: NavController) {

    //start the timer using observable
    let timer = Observable.timer(1, 10);
    this.timerSubscription = timer.subscribe((t: any) => {

      this.diff = Math.floor((Date.now() - this.startDate));
      let remainer = this.diff;

      this.years = Math.floor(this.diff / epochs.year);
      remainer = this.diff%epochs.year;

      this.months = Math.floor(remainer / epochs.month);
      remainer = remainer%epochs.month;

      this.days = Math.floor(remainer / epochs.day);
      remainer = remainer%epochs.day;

      this.hours = Math.floor(remainer / epochs.hour);
      remainer = remainer%epochs.hour;

      this.minutes = Math.floor(remainer / epochs.minute);
      remainer = remainer%epochs.minute;

      this.seconds = Math.floor(remainer / epochs.second);
      remainer = remainer%epochs.second;

      this.milliseconds = remainer;
    });
  }
}
