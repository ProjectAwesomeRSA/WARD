import { Component, OnInit } from '@angular/core';
import { GetActionsService } from '../_services/getActions.service';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.css']
})
export class ActionsComponent implements OnInit {
  actionsTasks: any;
  actionsQuests: any;
  constructor(private getActionsService: GetActionsService) { }

  ngOnInit() {
    this.getTasks();
    this.getQuests();
  }

  getTasks() {
    this.getActionsService.getTasks();
    this.actionsTasks = this.getActionsService.tasksResult;
  }

  getQuests() {
    this.getActionsService.getQuests();
    this.actionsQuests = this.getActionsService.questsResult;
  }

  doTask(taskId: number) {
    this.getActionsService.doTask(taskId);
  }

  doQuest(questId: number) {
    this.getActionsService.doQuest(questId);
  }
}
