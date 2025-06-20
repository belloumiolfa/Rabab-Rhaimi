import { Component, HostListener } from '@angular/core';
import { Router, RouterLink, RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu',
  imports: [ CommonModule,RouterModule,],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})

export class MenuComponent {
  isMenuOpen: boolean = false;
  activeSubMenu: string | null = null; // Stocke le menu actif

  ngOnInit() {
    this.isMenuOpen=false
  }


  constructor(private router: Router) {}

  toggleMenu() {
    
    //e.stopPropagation()
    // Close or toggle the menu visibility
    this.isMenuOpen = !this.isMenuOpen;

    console.log("----------",this.isMenuOpen);
    
    
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

 @HostListener('window:scroll', [])
onWindowScroll() {
  const topLink = document.querySelector('.mil-back-to-top') as HTMLElement;
  
  if (!topLink) return; // Sécurité

  // Appliquer la classe selon le scroll
  if (window.scrollY > 500) {
    topLink.classList.add('dark-bg');
  } else {
    topLink.classList.remove('dark-bg');
  }
}



}
