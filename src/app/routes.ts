import { Routes } from '@angular/router';
import { CharacterComponent } from './character/character.component';
import { AssetManagerComponent } from './asset-manager/asset-manager.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './_guards/auth.guard';

export const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    {
        path: '',
        runGuardsAndResolvers: 'always',
        canActivate: [AuthGuard],
        children: [
            { path: 'character', component: CharacterComponent },
            { path: 'assets', component: AssetManagerComponent },
        ]
    },
    { path: '**', redirectTo: '', pathMatch: 'full' },
];
