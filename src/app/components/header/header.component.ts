import { Component } from '@angular/core';
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
  hamburgerOpen = false;
  headerTitle = "Luke Jones";
  faHamburger = faHamburger;
  menuItems = [
    {
      "title": "Home",
      "icon": null,
      "target": null,
      "linkPath": "/home/", 
      "active": false
    },
    {
      "title": "Blog",
      "icon": null,
      "target": null,
      "linkPath": "/blog/", 
      "active": false
    },
    {
      "title": "CV/Resume",
      "icon": null,
      "target": null,
      "linkPath": "/cv/", 
      "active": false
    },
    {
      "title": "Research Projects",
      "icon": null,
      "target": null,
      "linkPath": "/research/", 
      "active": false
    },
    {
      "title": "Tags",
      "icon": null,
      "target": null,
      "linkPath": "/tags/", 
      "active": false
    },
    {
      "title": "Codebases",
      "icon": null,
      "target": null,
      "linkPath": "/projects/", 
      "active": false
    },
    {
      "title": "Courses",
      "icon": null,
      "target": null,
      "linkPath": "/courses/", 
      "active": false
    },
    {
      "title": "Contact",
      "icon": null,
      "target": null,
      "linkPath": "/contact/", 
      "active": false
    }
  ];
  menuRightItems = [
    {
      "title": null,
      "icon": "faGithub",
      "linkPath": "/github/",
      "target": "_blank", 
      "active": false
    },{
      "title": null,
      "icon": "faLinkedin",
      "linkPath": "/linkedin/",
      "target": "_blank", 
      "active": false
    },{
      "title": null,
      "icon": "faEnvelope",
      "linkPath": "/contact/",
      "target": null, 
      "active": false
    }
  ];

  constructor(private router: Router) {
    this.router.events.subscribe((val: any) => this.toggleHamburger());
  }

  toggleHamburger(): void {
    this.hamburgerOpen = !this.hamburgerOpen;
  }

}