import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CharacterComponent } from './character/character.component';
import { AssetManagerComponent } from './asset-manager/asset-manager.component';
import { AssetItemComponent } from './asset-item/asset-item.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { Routes, RouterModule } from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from './modal/modal.component';
import { ModalLoginComponent } from './modal-login/modal-login.component';
import { LoginComponent } from './login/login.component';

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
    HeaderComponent,
    ModalComponent,
    ModalLoginComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    ModalLoginComponent
  ]
})
export class AppModule { }
