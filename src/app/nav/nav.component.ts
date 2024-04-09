import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  isMenuOpen: boolean = false;
  constructor(private route:Router){
  }
  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
    
    const menu=window.document.getElementById("menu-links")
    const icon=document.querySelector(".hamburger-icon")
    if(menu&&icon ){
      
      menu.classList.toggle("open")
      icon.classList.toggle("open")
    }
  }
  
  routeFunc(path:string){
    this.route.navigate([path])
  }
  togglee(){}
}
