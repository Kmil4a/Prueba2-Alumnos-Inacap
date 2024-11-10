import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.page.html',
  styleUrls: ['./alumno.page.scss'],
})
export class AlumnoPage implements OnInit {
  alumnos: any[] = [];

  constructor(private loadingController: LoadingController) {}

  async ngOnInit() {
    const loading = await this.loadingController.create({
      message: 'Cargando......',
      duration: 1000,
      spinner: 'circles',
    });

    await loading.present();

    setTimeout(async () => {
      await loading.dismiss();
      this.loadalumnos();
    }, 1000);
  }

  loadalumnos() {
    this.alumnos = [
      {
        id: 1,
        nombre: 'Marta',
        apellido: 'Perez',
        rut: '11.111.111-1',
        email: 'marta@inacapmail.cl',
        image:
          'https://static.vecteezy.com/system/resources/previews/008/442/086/non_2x/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg',
      },
      {
        id: 2,
        nombre: 'Marcelo',
        apellido: 'Lopez',
        rut: '22.222.222-2',
        email: 'marcelo@inacapmail.cl',
        image:
          'https://static.vecteezy.com/system/resources/previews/008/442/086/non_2x/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg',
      },
      {
        id: 3,
        nombre: 'Elsa',
        apellido: 'Pato',
        rut: '33.333.333-3',
        email: 'elsa@inacapmail.cl',
        image:
          'https://static.vecteezy.com/system/resources/previews/008/442/086/non_2x/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg',
      },
      {
        id: 4,
        nombre: 'Keko',
        apellido: 'Jones',
        rut: '44.444.444-4',
        email: 'keko@inacapmail.cl',
        image:
          'https://static.vecteezy.com/system/resources/previews/008/442/086/non_2x/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg',
      },
    ];
  }
}
