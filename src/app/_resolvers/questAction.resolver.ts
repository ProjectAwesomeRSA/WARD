import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { QuestAction } from '../_models/questAction';
import { GetActionsService } from '../_services/getActions.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()

export class QuestActionResolver implements Resolve<QuestAction> {
    constructor(private getActionService: GetActionsService, private router: Router) {}

    resolve(route: ActivatedRouteSnapshot): Observable<QuestAction> {
        return this.getActionService.getQuests().pipe(
            catchError(error => {
                console.log(error);
                this.router.navigate(['/home']);
                return of(null);
            })
        );
    }
}
