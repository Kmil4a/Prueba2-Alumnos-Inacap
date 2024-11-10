import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.page.html',
  styleUrls: ['./recuperar.page.scss'],
})
export class RecuperarPage implements OnInit {
  passValue?: string;
  passConfirmValue?: string;

  constructor(
    private alertController: AlertController,
    private loadingController: LoadingController,
    private router: Router
  ) {}

  ngOnInit() {}

  async recuperar() {
    const pass = this.passValue;
    const passConfirm = this.passConfirmValue;

    if (!pass || !passConfirm) {
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
      message: 'Actualizando contraseña...',
      duration: 1000,
      spinner: 'circles',
    });

    await loading.present();

    setTimeout(async () => {
      await loading.dismiss();

      const successAlert = await this.alertController.create({
        header: 'Éxito',
        message: 'Contraseña actualizada exitosamente.',
        buttons: ['OK'],
      });

      await successAlert.present();

      successAlert.onDidDismiss().then(() => {
        this.router.navigate(['login']);
      });
    }, 1000);
  }
}
