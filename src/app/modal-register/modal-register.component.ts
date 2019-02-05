import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-register',
  template: `
    <app-modal title="Register">
      <app-register></app-register>
    </app-modal>`,
  styleUrls: ['./modal-register.component.css']
})
export class ModalRegisterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
}
