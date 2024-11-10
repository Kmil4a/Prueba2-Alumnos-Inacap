import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  AlertController,
  LoadingController,
  MenuController,
} from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  emailValue?: string;
  passValue?: string;
  passConfirmValue?: string;

  constructor(
    private router: Router,
    private menuController: MenuController,
    private alertController: AlertController,
    private loadingController: LoadingController
  ) {}

  ngOnInit() {
    this.menuController.enable(false);
  }

  async registro() {
    const email = this.emailValue;
    const pass = this.passValue;
    const passConfirm = this.passConfirmValue;

    if (!email || !pass || !passConfirm) {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Por favor, rellene todos los campos.',
        buttons: ['OK'],
      });

      await alert.present();
      return;
    }

    if (pass !== passConfirm) {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Las contraseñas no coinciden.',
        buttons: ['OK'],
      });

      await alert.present();
      return;
    }

    const loading = await this.loadingController.create({
      message: 'Registrando...',
      duration: 1000,
      spinner: 'circles',
    });

    await loading.present();

    setTimeout(async () => {
      await loading.dismiss();

      const successAlert = await this.alertController.create({
        header: 'Éxito',
        message: 'Registro exitoso.',
        buttons: ['OK'],
      });

      await successAlert.present();

      successAlert.onDidDismiss().then(() => {
        this.router.navigate(['login']);
      });
    }, 2000);
  }
  navigateToLogin() {
    this.router.navigate(['login']);
  }
}
