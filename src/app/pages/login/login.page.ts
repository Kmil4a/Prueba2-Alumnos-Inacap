import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  AlertController,
  LoadingController,
  MenuController,
} from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  emailValue?: string;
  passValue?: string;

  constructor(
    private router: Router,
    private menuController: MenuController,
    private alertController: AlertController,
    private loadingController: LoadingController
  ) {}

  ngOnInit() {
    this.menuController.enable(false);
  }

  async login() {
    const email = this.emailValue;
    const pass = this.passValue;

    if (email == 'juan@inacapmail.cl' && pass === '123456') {
      const loading = await this.loadingController.create({
        message: 'Cargando......',
        duration: 1000,
        spinner: 'circles',
      });

      await loading.present();

      setTimeout(async () => {
        await loading.dismiss();
        this.router.navigate(['home']);
      }, 2000);
    } else {
      const alert = await this.alertController.create({
        header: 'Acceso denegado',
        message: 'Usuario o contraseña incorrectos!',
        buttons: ['Aceptar'],
      });

      await alert.present();
    }
  }
  navigateToRegistro() {
    this.router.navigate(['registro']);
  }
  navigateToRecuperar() {
    this.router.navigate(['recuperar']);
  }
}
