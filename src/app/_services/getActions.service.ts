import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetActionsService {

  tasksResult: any;
  questsResult: any;
  doTaskResult: any;

  constructor(private http: HttpClient) { }

  getTasks() {
    this.http.get('http://localhost:5000/api/actions/tasks').subscribe(response => {
      this.tasksResult = response;
    }, error => {
      console.log(error);
    });
  }

  getQuests() {
    this.http.get('http://localhost:5000/api/actions/quests').subscribe(response => {
      this.questsResult = response;
    }, error => {
      console.log(error);
    });
  }

  doTask(taskId: number) {
    this.http.get('http://localhost:5000/api/actions/tasks/' + taskId.toString()).subscribe(response => {
      this.doTaskResult = response;
    }, error => {
      console.log(error);
    });
  }

  doQuest(taskId: number) {
    this.http.get('http://localhost:5000/api/actions/quests/' + taskId.toString()).subscribe(response => {
      this.doTaskResult = response;
    }, error => {
      console.log(error);
    });
  }
}
