import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor(private router:Router) {
  }

  ngOnInit() {

    //Funcion Clasica de colocar un Toggle del navbar cuando en responsive en mobile en TypeScrip
    let menuIcon = (document.querySelector('#menu-icon') as HTMLButtonElement);
    let navbar = (document.querySelector('.navbar') as HTMLElement);
    let selection =(document.querySelector('.selection') as HTMLElement);
    let selection_2 =(document.querySelector('.selection_2') as HTMLElement);
    let selection_3 =(document.querySelector('.selection_3') as HTMLElement);
    let selection_4 =(document.querySelector('.selection_4') as HTMLElement);
    let selection_5 =(document.querySelector('.selection_5') as HTMLElement);

    menuIcon.addEventListener('click', () : void => {
      menuIcon.classList.toggle('bx-x');
      navbar.classList.toggle('active');

      //Funcion que hace que los links se cierren cuando se haga el click en responsive en mobile
      selection.addEventListener('click', () : void => {
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
      })

      selection_2.addEventListener('click', () : void => {
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
      })

      selection_3.addEventListener('click', () : void => {
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
      })

      selection_4.addEventListener('click', () : void => {
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
      })

      selection_5.addEventListener('click', () : void => {
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
      })
      
    })
   
  }

}


