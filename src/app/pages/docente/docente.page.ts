import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-docente',
  templateUrl: './docente.page.html',
  styleUrls: ['./docente.page.scss'],
})
export class DocentePage implements OnInit {
  docentes: any[] = [];

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
      this.loadDocentes();
    }, 1000);
  }

  loadDocentes() {
    this.docentes = [
      {
        id: 1,
        nombre: 'Juan',
        apellido: 'Perez',
        rut: '11.111.111-1',
        email: 'juan@inacapmail.cl',
        image:
          'https://static.vecteezy.com/system/resources/previews/008/442/086/non_2x/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg',
      },
      {
        id: 2,
        nombre: 'Maria',
        apellido: 'Lopez',
        rut: '22.222.222-2',
        email: 'maria@inacapmail.cl',
        image:
          'https://static.vecteezy.com/system/resources/previews/008/442/086/non_2x/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg',
      },
      {
        id: 3,
        nombre: 'Pedro',
        apellido: 'Gonzalez',
        rut: '33.333.333-3',
        email: 'pedro@inacapmail.cl',
        image:
          'https://static.vecteezy.com/system/resources/previews/008/442/086/non_2x/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg',
      },
      {
        id: 4,
        nombre: 'Jose',
        apellido: 'Martinez',
        rut: '44.444.444-4',
        email: 'jose@inacapmail.cl',
        image:
          'https://static.vecteezy.com/system/resources/previews/008/442/086/non_2x/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg',
      },
    ];
  }
}
