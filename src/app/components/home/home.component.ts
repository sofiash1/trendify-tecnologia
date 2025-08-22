import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title = 'trendifyA';

  cardsData = [
    {
      img: '../assets/img/portadaudifonos.png',
      title: 'Audífonos',
      description: 'Sonido envolvente y conexión inalámbrica estable para disfrutar tu música sin interrupciones.',
      color: 'font-archivo-black text-blue-900'
    },
    {
      img: '../assets/img/smartwatch.jpg',
      title: 'Smartwatch',
      description: 'Monitorea tu salud, recibe notificaciones y controla tu música desde tu muñeca.',
      color: 'font-archivo-black text-blue-900'
    },
    {
      img: '../assets/img/portadaudifonos.jpg',
      title: 'Parlantes',
      description: 'Audio potente y nítido con diseño portátil, perfecto para tus reuniones y fiestas.',
      color: 'font-archivo-black text-blue-900'
    },
    {
      img: '../assets/img/hogar.jpg',
      title: 'Hogar',
      description: 'Tecnología para tu hogar con estilo y comodidad.',
      color: 'font-archivo-black text-blue-900'
    },
    {
      img: '../assets/img/otros.png',
      title: 'Otros artículos',
      description: 'Accesorios y productos adicionales para complementar tu experiencia.',
      color: 'font-archivo-black text-blue-900'
    }
  ];


}
