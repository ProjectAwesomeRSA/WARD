import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginService } from '../_services/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  model: any = {};

  constructor(private authService: AuthService,
              private activeModal: NgbActiveModal,
              private loginService: LoginService) { }

  ngOnInit() {
  }

  register() {
    console.log(this.model);
    this.authService.register(this.model).subscribe(() => {
      console.log('Registration successful');
      this.loginService.login(this.model);
      this.activeModal.close('Close click');
    }, error => {
      console.log(error);
    });
  }
}
