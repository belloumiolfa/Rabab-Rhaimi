import { Component } from '@angular/core';
import { RouterLink, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu',
  imports: [ CommonModule, RouterLink],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})

export class MenuComponent {
  isMenuOpen: boolean = false;
  activeSubMenu: string | null = null; // Stocke le menu actif

  

  toggleMenu(): void {
    console.log('Bouton cliqué !');
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu(): void {
    if (this.isMenuOpen) {
      this.isMenuOpen = false;
    }
  }

  
  


toggleSubMenu(name: string): void {
  this.activeSubMenu = this.activeSubMenu === name ? null : name;
}

isSubMenuActive(name: string): boolean {
  return this.activeSubMenu === name;
}

  

}
