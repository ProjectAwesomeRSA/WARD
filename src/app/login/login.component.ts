import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginService } from '../_services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any = {};

  constructor(private activeModal: NgbActiveModal,
              private loginService: LoginService) { }

  ngOnInit() {
  }

  login() {
    this.loginService.login(this.model);
    this.activeModal.close('Close click');
  }

}
