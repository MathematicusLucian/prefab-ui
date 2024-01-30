import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuItemComponent } from '../menu-item/menu-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHamburger } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
// const routerOptions: ExtraOptions = {
//   scrollPositionRestoration: 'enabled',
//   anchorScrolling: 'enabled',
//   scrollOffset: [0, 64],
// };

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, MenuItemComponent, FontAwesomeModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.sass'
})
export class HeaderComponent {
  @Input() headerData: any; 
  @Input() mainMenuData: any; 
  @Input() linksMenuData: any; 
  hamburgerOpen = false;
  headerTitle = "Luke Jones";
  faHamburger = faHamburger;

  constructor(private router: Router) {
    this.router.events.subscribe((val: any) => this.hamburgerOpen = false);
  }

  toggleHamburger(): void {
    this.hamburgerOpen = !this.hamburgerOpen;
  }

}