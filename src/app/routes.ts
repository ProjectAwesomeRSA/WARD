import { Routes } from '@angular/router';
import { CharacterComponent } from './character/character.component';
import { AssetManagerComponent } from './asset-manager/asset-manager.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './_guards/auth.guard';
import { ActionsComponent } from './actions/actions.component';
import { MarketComponent } from './market/market.component';

export const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    {
        path: '',
        runGuardsAndResolvers: 'always',
        canActivate: [AuthGuard],
        children: [
            { path: 'character', component: CharacterComponent },
            { path: 'assets', component: AssetManagerComponent },
            { path: 'actions', component: ActionsComponent },
            { path: 'market', component: MarketComponent },
        ]
    },
    { path: '**', redirectTo: '', pathMatch: 'full' },
];
