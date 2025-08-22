// tips.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-tips',
  templateUrl: './tips.component.html',
  styleUrls: ['./tips.component.css']
})
export class TipsComponent {
  tips = [
    {
      title: 'CARGA ADECUADA:',
      description: 'Usa siempre el cable y el cargador recomendados por el fabricante. Evita cargarlos con fuentes de energía no confiables o de alta potencia, como cargadores rápidos, para evitar dañar la batería.',
      icon: 'battery-charging-outline'
    },
    {
      title: 'LIMPIEZA REGULAR:',
      description: 'Limpia los auriculares regularmente con un paño seco o ligeramente húmedo para retirar suciedad y cerumen. Nunca uses agua ni productos químicos directamente en los auriculares.',
      icon: 'water-outline'
    },

    {
      title: 'ALMACENAMIENTO SEGURO:',
      description: 'Guarda los auriculares en su estuche de carga cuando no los estés usando. Esto protege tanto la batería como la estructura de los auriculares y evita pérdidas..',
      icon: 'cube-outline'
    },
    {
      title: 'EVITAR ENTORNOS EXTREMOS:',
      description: 'No los expongas a temperaturas extremas, agua o humedad excesiva, a menos que estén diseñados para resistirlas (por ejemplo, resistencia IPX).Prolongará su vida útil.',
      icon: 'sunny-outline'
    },

  ];
}
