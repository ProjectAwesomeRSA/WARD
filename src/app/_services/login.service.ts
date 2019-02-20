import { Injectable } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { Router } from '@angular/router';
import { GetCharacterService } from '../_services/getCharacter.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private authService: AuthService,
              private router: Router,
              protected getCharacter: GetCharacterService) { }

  login(model: any = {}) {
    this.authService.login(model).subscribe(next => {
      console.log('Logged in successfully');
    }, error => {
      console.log(error);
    }, () => {
      this.getCharacter.getCharacterInfo();
      this.router.navigate(['/character']);
    });
  }
}
