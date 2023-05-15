import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})

export class FooterComponent {

  public anio: number;

  //Esta funcion hace que se actualice el año automaticamente
  constructor() {
    this.anio = new Date().getFullYear();
  }

}
