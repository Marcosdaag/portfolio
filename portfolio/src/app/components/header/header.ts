import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  // Estado del menú móvil
  isMobileMenuOpen = false;

  // Función para abrir/cerrar con el botón hamburguesa
  toggleMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  // Función para cerrar el menú automáticamente al hacer clic en un enlace
  closeMenu() {
    this.isMobileMenuOpen = false;
  }
}
