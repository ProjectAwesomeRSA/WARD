import { Component, OnInit } from '@angular/core';
import { GetWorldFactorsService } from '../_services/getWorldFactors.service';
import { interval } from 'rxjs';
import { timeInterval } from 'rxjs/operators';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(protected getWorldFactors: GetWorldFactorsService) { }

  ngOnInit() {
    this.getWorldFactors.getWorldFactorData();

    const counter = interval(240000);
    counter.subscribe(() => this.getWorldFactors.getWorldFactorData());
  }

}
