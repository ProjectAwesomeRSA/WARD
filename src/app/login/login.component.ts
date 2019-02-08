import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any = {};

  constructor(private authService: AuthService, public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

  login() {
    this.authService.login(this.model).subscribe(next => {
      this.activeModal.close('Close click');
      console.log('Logged in successfully');
    }, error => {
      console.log('Failed to login');
    });
  }

}
