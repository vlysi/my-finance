import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon'
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-nav',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.scss'
})
export class SideNavComponent {
  isSlideOut: boolean = true;
  
  constructor(private router: Router){}

  // Cambia el estado del menú
  toggleSlideOut(): void {
    this.isSlideOut = !this.isSlideOut;
  }

  // Navega a una ruta específica
  navigateTo(route: string): void {
    this.router.navigate([route]);
  }
}
