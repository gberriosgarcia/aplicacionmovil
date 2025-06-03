import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class LoginPage {

  username: string = '';
  password: string = '';

  constructor() {}

  onLogin() {
    // Aquí va la logica de autentificacion
    if (this.username === 'admin' && this.password === '1234') {
      alert('¡Login exitoso!');
    
    } else {
      alert('Usuario o contraseña incorrectos.');
    }
  }
}
