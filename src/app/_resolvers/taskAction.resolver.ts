import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { TaskAction } from '../_models/taskAction';
import { GetActionsService } from '../_services/getActions.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()

export class TaskActionResolver implements Resolve<TaskAction> {
    constructor(private getActionService: GetActionsService, private router: Router) {}

    resolve(route: ActivatedRouteSnapshot): Observable<TaskAction> {
        return this.getActionService.getTasks().pipe(
            catchError(error => {
                console.log(error);
                this.router.navigate(['/home']);
                return of(null);
            })
        );
    }
}
