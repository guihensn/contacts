import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  user?: string;
  password?: string;
  errorMessages?: string[];

  constructor(private apiService: ApiService, private router: Router) {
    if (localStorage.getItem('token')) {
      this.router.navigate(['/contacts/list']);
    }
  }
  
  login() {
    if(this.validateFields() === false) return;
  
    this.apiService.login(this.user!, this.password!).subscribe((response) => {
      if (response?.token) {
        localStorage.setItem('token', response.token);
        localStorage.setItem('expirationDate', JSON.stringify(response.expirationDate));
      }else{
        this.errorMessages = ['Usuário ou senha inválidos'];
        return;
      }

      this.router.navigate(['/contacts/list']);
    });
  }

  validateFields():boolean {
    this.errorMessages = [];

    if (!this.user) this.errorMessages.push('Usuário vazio');
    if (!this.password) this.errorMessages.push('Senha vazia');

    return this.errorMessages.length === 0;
  }
}
