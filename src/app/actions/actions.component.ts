import { Component, OnInit } from '@angular/core';
import { GetActionsService } from '../_services/getActions.service';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.css']
})
export class ActionsComponent implements OnInit {
  actionsTasks: any;
  constructor(private getActionsService: GetActionsService) { }

  ngOnInit() {
    this.getTasks();
  }

  getTasks() {
    this.getActionsService.getTasks();
    this.actionsTasks = this.getActionsService.taskActions;
  }
}
