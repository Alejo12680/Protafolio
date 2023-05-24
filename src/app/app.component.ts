import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  title = 'portafolio';

  //Variable para mostrar el loading
  showPreloading: boolean = false;

  constructor( ) {

   }

  ngOnInit() {
  
    setTimeout(() => {
      this.showPreloading = true;
    }, 5200);

  }
  
}
