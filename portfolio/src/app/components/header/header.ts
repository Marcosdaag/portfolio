import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  // Estado del menú móvil y si el usuario esta scrolleando
  isMobileMenuOpen = false;
  isScrolled = false;

  // Escuchamos el evento de scroll del navegador
  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Si el scroll vertical es mayor a 50px, activamos el estado "scrolled"
    this.isScrolled = window.scrollY > 50;
  }

  // Función para abrir/cerrar con el botón hamburguesa
  toggleMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  // Función para cerrar el menú automáticamente al hacer clic en un enlace
  closeMenu() {
    this.isMobileMenuOpen = false;
  }
}
