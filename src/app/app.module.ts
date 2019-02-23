import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CharacterComponent } from './character/character.component';
import { AssetManagerComponent } from './asset-manager/asset-manager.component';
import { AssetItemComponent } from './asset-item/asset-item.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from './modal/modal.component';
import { ModalLoginComponent } from './modal-login/modal-login.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ModalRegisterComponent } from './modal-register/modal-register.component';
import { AuthService } from './_services/auth.service';
import { GetCharacterService } from './_services/getCharacter.service';
import { GetOrdinalNumberService } from './_services/getOrdinalNumber.service';
import { HomeComponent } from './home/home.component';
import { LoginService } from './_services/login.service';
import { CompareValidatorDirective } from './_directives/compare-validator.directive';
import { GetWorldFactorsService } from './_services/getWorldFactors.service';
import { appRoutes } from './routes';
import { AuthGuard } from './_guards/auth.guard';
import { ActionsComponent } from './actions/actions.component';
import { MarketComponent } from './market/market.component';

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
    LoginComponent,
    RegisterComponent,
    ModalRegisterComponent,
    HomeComponent,
    CompareValidatorDirective,
    ActionsComponent,
    MarketComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [
    AuthService,
    GetCharacterService,
    GetOrdinalNumberService,
    LoginService,
    GetWorldFactorsService,
    AuthGuard
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    ModalLoginComponent,
    ModalRegisterComponent
  ]
})
export class AppModule { }
