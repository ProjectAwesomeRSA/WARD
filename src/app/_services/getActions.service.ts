import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { QuestAction } from '../_models/questAction';
import { TaskAction } from '../_models/taskAction';

@Injectable({
  providedIn: 'root'
})
export class GetActionsService {
  baseUrl = environment.apiUrl + 'actions/';

  doTaskResult: any;

  constructor(private http: HttpClient) { }

  getQuests(): Observable<QuestAction[]> {
    return this.http.get<QuestAction[]>(this.baseUrl + 'quests');
  }

  getTasks(): Observable<TaskAction[]> {
    return this.http.get<TaskAction[]>(this.baseUrl + 'tasks');
  }

  doTask(taskId: number) {
    this.http.get(this.baseUrl + 'tasks/' + taskId.toString()).subscribe(response => {
      this.doTaskResult = response;
    }, error => {
      console.log(error);
    });
  }

  doQuest(taskId: number) {
    this.http.get(this.baseUrl + 'quests/' + taskId.toString()).subscribe(response => {
      this.doTaskResult = response;
    }, error => {
      console.log(error);
    });
  }
}
