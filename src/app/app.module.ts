import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharacterComponent } from './character/character.component';
import { AssetManagerComponent } from './asset-manager/asset-manager.component';
import { AssetItemComponent } from './asset-item/asset-item.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { Routes, RouterModule } from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

const appRoutes: Routes = [
  {path: 'character', component: CharacterComponent },
  {path: 'assets', component: AssetManagerComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    CharacterComponent,
    AssetManagerComponent,
    AssetItemComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
