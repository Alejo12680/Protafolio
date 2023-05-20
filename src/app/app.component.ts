import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portafolio';

  constructor( ) {

   }

  ngOnInit() {
    //Funcion de cuando se active el ecroll cambie de color el navbar
    window.onscroll = () => {
      let header = document.querySelector('header');

      header?.classList.toggle('sticky', window.screenY > 100);
    }
  }
  
}
