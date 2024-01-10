import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
// import { MatToolbarModule } from '@angular/material/toolbar';
// import { MatTooltipModule } from '@angular/material/tooltip';
import { FlexLayoutModule } from "@angular/flex-layout";
import { FlexLayoutServerModule } from '@angular/flex-layout/server';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MenuItemComponent } from '../menu-item/menu-item.component';
// const routerOptions: ExtraOptions = {
//   scrollPositionRestoration: 'enabled',
//   anchorScrolling: 'enabled',
//   scrollOffset: [0, 64],
// };

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, MenuItemComponent, RouterOutlet, FontAwesomeModule, FlexLayoutModule, FlexLayoutServerModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.sass'
})
export class HeaderComponent {
  faGithub = faGithub;
  faLinkedin = faLinkedin;
  faEnvelope = faEnvelope;
  HeaderTitle = "Luke Jones";
  menuItems = [
    {
      "title": "Home",
      "linkPath": "/home/" 
    },
    {
      "title": "Blog",
      "linkPath": "/blog/" 
    },
    {
      "title": "CV/Resume",
      "linkPath": "/cv/" 
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
