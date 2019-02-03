import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-login',
  template: `
    <app-modal title="Login">
      <app-login></app-login>
    </app-modal>`,
  styleUrls: ['./modal-login.component.css']
})
export class ModalLoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
}
