import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: false,
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  public title: string;
  public subtitle: string;
  public email: string;

  constructor(){
    this.title = "Marcos Aguirre";
    this.subtitle = "Estudiante de web design.";
    this.email = "marcosoffs99@gmail.com";
  }
}
