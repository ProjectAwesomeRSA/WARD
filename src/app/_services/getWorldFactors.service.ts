import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetWorldFactorsService {

  serverTime: string;
  currentYear: number;
  season: number;
  currentMonth: number;
  currentDay: number;

  factors: any = null;

  constructor(private http: HttpClient) { }

  getWorldFactorData() {
    this.http.get('http://localhost:5000/api/time').subscribe(response => {
      this.factors = response;
      this.updateFactors();
    }, error => {
      console.log(error);
    });
  }

  updateFactors() {
    if (this.factors != null) {
      this.serverTime = this.factors.serverTime;
      this.currentYear = this.factors.currentYear;
      this.season = this.factors.season;
      this.currentMonth = this.factors.currentMonth;
      this.currentDay = this.factors.currentDay;
    }
  }
}
