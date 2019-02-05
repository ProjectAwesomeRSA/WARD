import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalLoginComponent } from '../modal-login/modal-login.component';
import { ModalRegisterComponent } from '../modal-register/modal-register.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  navbarOpen = false;

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  constructor(private modalService: NgbModal) {}

  openLogin() {
    const modalRef = this.modalService.open(ModalLoginComponent);
    modalRef.componentInstance.title = 'Login';
  }

  openRegister() {
    const modalRef = this.modalService.open(ModalRegisterComponent);
    modalRef.componentInstance.title = 'Register';
  }

  ngOnInit() {
  }
}
