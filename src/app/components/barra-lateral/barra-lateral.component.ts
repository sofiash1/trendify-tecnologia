import { Component } from '@angular/core';

@Component({
  selector: 'app-barra-lateral',
  templateUrl: './barra-lateral.component.html',
  styleUrls: ['./barra-lateral.component.css']
})
export class BarraLateralComponent {
  testimonios = [
    {
      fecha: 'Junio 2025',
      nombre: 'Sofía',
      comentario: 'Excelente servicio, todo llegó a tiempo y en perfectas condiciones.'
    },
    {
      fecha: 'Mayo 2025',
      nombre: 'Carlos',
      comentario: 'Muy satisfecho con mi compra, atención al cliente rápida y amable.'
    },
    {
      fecha: 'Abril 2025',
      nombre: 'María',
      comentario: 'Gran calidad y buen precio. Definitivamente compraré de nuevo.'
    }
  ];

}
