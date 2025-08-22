import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {
  @Input() items: any[] = [];

  productosExtra: any[] = [];
  tituloExtra: string = '';

  verMas(item: { title: string; color: string }) {
    this.tituloExtra = `Productos de ${item.title}`;

    // Normaliza el texto: minúsculas + elimina tildes
    const normalize = (s: string) =>
      s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');

    const key = normalize(item.title);

    // Catálogo de productos
    const productos: { [key: string]: any[] } = {
      'audifonos': [
        { img: '../assets/img/airpodsmax.png', title: 'AIRPODS MAX', precio: '$150.000', description: 'Auriculares premium con cancelación activa y audio espacial.' },
        { img: '../assets/img/airpods.jpg', title: 'AIRPODS PRO 2 TC', precio: '$120.000', description: 'Cancelación avanzada y sonido envolvente.' },
        { img: '../assets/img/serie3.jpg', title: 'AIRPODS SERIE 3', precio: '$125.000', description: 'Diseño ergonómico y audio espacial.' },
        { img: '../assets/img/audifonos-jkmx-jk1.jpg', title: 'JKMX JK1', precio: '$125.000', description: 'Sonido potente con diseño ligero.' },
        { img: '../assets/img/tourpro2.jpg', title: 'JBL TOUR PRO 2', precio: '$130.000', description: 'Cancelación activa y estuche táctil.' },
        { img: '../assets/img/tourpro5.jpg', title: 'JBL TOUR PRO 5', precio: '$140.000', description: 'Graves profundos y hasta 40h de batería.' },
        { img: '../assets/img/y95.jpg', title: 'JBL TUNE Y95', precio: '$110.000', description: 'Audio nítido con aislamiento de ruido.' },
        { img: '../assets/img/510.png', title: 'JBL TUNE 510', precio: '$100.000', description: 'Auriculares plegables con sonido JBL Pure Bass.' },
        { img: '../assets/img/xm5.jpg', title: 'SONY WF-1000XM5', precio: '$128.000', description: 'Cancelación líder y sonido Hi-Res.' },
        { img: '../assets/img/beats.jpg', title: 'BEATS STUDIO PRO', precio: '$153.000', description: 'Sonido potente con ecualización avanzada.' },
        { img: '../assets/img/oseac.jpg', title: 'AUDÍFONOS CONDUCCIÓN ÓSEA C', precio: '$90.000', description: 'Tecnología ósea ideal para deporte.' }
      ],

      'smartwatch': [
        { img: '../assets/img/ultra10.jpg', title: 'HK10 ULTRA A', precio: '$220.000', description: 'Pantalla AMOLED HD táctil, sensores de ritmo cardíaco, SpO2 y presión arterial, modos deportivos, notificaciones inteligentes, control de música y cámara, NFC (según versión), batería 3-7 días, carga magnética, compatible con Android e iOS.' },
        {
          img: '../assets/img/ultra2.jpg',
          title: 'HK ULTRA 2',
          precio: '$175.000',
          description: `Reloj inteligente 49 mm, pantalla Amoled, monitoreo de presión y oxígeno, registro de actividad, llamadas Bluetooth, notificaciones y asistente de voz. Garantía 30 días.`

        }

      ],
      'parlantes': [
        {
          img: '../assets/img/4MINI.jpg',
          title: 'XTREME 4 MINI',
          description: 'Bluetooth, radio FM, tarjeta SD, USB Power Bank, TWS. Batería 1200 mAh, duración 4-5 h, carga 2-3 h, colores: negro, azul, rojo y camuflado.'
        },
        {
          img: '../assets/img/4XL.jpg',
          title: 'XTREME 4 XL',
          description: 'Parlante de gran potencia con sonido extra bass, luces LED y conexión TWS para enlazar dos equipos.'
        },

        { img: '../assets/img/3MANIJA.jpg', title: 'JBL BOOMBOX 3 -MANIJA', description: 'Potencia 80W, Bluetooth, radio FM, entradas USB/AUX, resistente a salpicaduras, batería 5–8 h, sonido premium.' },
        { img: '../assets/img/boomb.jpg', title: 'BOOMBOX 3 60W -CORREA', description: 'Potencia 60W, Bluetooth 5.0, hasta 8 h de uso, entradas USB/AUX, TWS, diseño robusto, ideal para exteriores.' },
        { img: '../assets/img/FLIP6.jpg', title: 'JBL FLIP 6', description: 'Potencia 30W, Bluetooth, radio FM, entradas USB/SD/AUX, interconexión TWS, batería 5–6 h.' },
        { img: '../assets/img/CHARGE5.png', title: 'CHARGE 5', description: 'Bluetooth 5.1, resistente al polvo y salpicaduras, entradas USB/AUX, radio FM, batería 4–6 h, carga rápida.' },
        { img: '../assets/img/FLIP5.jpg', title: 'JBL CLIP 5', description: 'Potencia 20W, Bluetooth, radio FM, entradas USB/SD/AUX, interconexión TWS, batería 5–6 h, carga USB-C.' },
        { img: '../assets/img/CHARGE7S.jpg', title: 'CHARGE 7S LED', description: 'Potencia 40W, Bluetooth, radio FM, entradas USB/SD/AUX, interconexión TWS, batería 5–6 h, carga USB-C.' },
        { img: '../assets/img/WIND3.png', title: 'WIND 3S CON PANTALLA', description: 'Bluetooth, controles integrados, carga USB-C, autonomía 8 h, resistencia al agua IPX5, sonido potente y diseño robusto.' }
      ],
      'hogar': [
        { img: '../assets/img/BEAM.jpg', title: 'VIDEO BEAM PROYECTOR MINI LED HDMI 60 PULGADAS', precio: '$170.000', description: 'Proyección de alta calidad hasta 60 pulgadas.' },
        { img: '../assets/img/reloj.jpg', title: 'RELOJ DESPERTADOR DIGITAL', precio: '$70.000', description: 'Pantalla LED, alarmas personalizables.' },
        { img: '../assets/img/stick.jpg', title: 'TV STICK REPLICA 1.1 CON MAGIS', precio: '$150.000', description: 'Transforma tu televisor en Smart TV.' },
        { img: '../assets/img/basta.jpg', title: 'JUEGO DE MESA "BASTA" ORIGINAL', precio: '$79.000', description: 'Diversión para toda la familia.' },
        { img: '../assets/img/mini.jpg', title: 'MINI LICUADORA ELECTRICA PORTATIL', precio: '$99.000', description: 'Ideal para batidos rápidos y portátiles.' }
      ],
      'otros articulos': [
        { img: '../assets/img/COMBO.png', title: 'COMBO', precio: '$190.000', description: 'Incluye accesorios esenciales para tu día a día.' },
        { img: '../assets/img/magsafe.jpg', title: 'BATERIA MAGSAFE', precio: '$90.000', description: 'Carga rápida, inalámbrica y portátil.' },
        { img: '../assets/img/usb.jpg', title: 'CABLE USB TIPO C IPHONE', precio: '$30.000', description: 'Conexión veloz y transferencia estable.' },
        { img: '../assets/img/inalambrico.jpg', title: 'CARGADOR INALAMBRICO MAGSAFE', precio: '$80.000', description: 'Carga sin cables, práctica y eficiente.' },
        { img: '../assets/img/lightining.jpg', title: 'CARGADOR LIGHTNING TIPO C 25W', precio: '$70.000', description: 'Potencia ideal para carga rápida y segura.' }
      ]
    };

    // Asignar productos según la categoría
    this.productosExtra = productos[key] || [];
  }
}
