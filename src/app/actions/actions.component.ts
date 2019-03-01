import { Component, OnInit } from '@angular/core';
import { GetActionsService } from '../_services/getActions.service';
import { QuestAction } from '../_models/questAction';
import { ActivatedRoute } from '@angular/router';
import { TaskAction } from '../_models/taskAction';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.css']
})
export class ActionsComponent implements OnInit {
  taskActions: TaskAction[];
  questActions: QuestAction[];

  constructor(private getActionsService: GetActionsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.questActions = data.questActions;
      this.taskActions = data.taskActions;
    });
  }

  doTask(taskId: number) {
    console.log(this.getActionsService.doTask(taskId));
  }

  doQuest(questId: number) {
    console.log(this.getActionsService.doQuest(questId));
  }
}
