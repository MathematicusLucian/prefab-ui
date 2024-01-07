import { Component, Input, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export interface MenuItem {
  title: string;
  icon: string;
  target: string;
  linkPath: string;
  active: string;
}

@Component({
  selector: 'app-menu-item',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, RouterOutlet, FontAwesomeModule],
  templateUrl: './menu-item.component.html',
  styleUrl: './menu-item.component.sass'
})
export class MenuItemComponent implements OnChanges {
  @Input() menuItem: any;
  icon: any;
  faIconData = faGithub;
  icons: Array<any> = [
    { 
      name: 'faGithub', 
      iconData: faGithub
    },
    { 
      name: 'faLinkedin', 
      iconData: faLinkedin
    },
    { 
      name: 'faEnvelope', 
      iconData: faEnvelope
    }
  ];
  title$: string = "";
  target$: string = "";
  linkPath$: string = "";
  active$: boolean = false;

  ngOnChanges(changes: any) {
    this.title$ = JSON.parse(changes.menuItem.currentValue).title;
    this.icon = JSON.parse(changes.menuItem.currentValue).icon;
    if(this.icon) {
      let iconData = this.icons.find((x) => x.name == this.icon).iconData;
      this.faIconData = iconData;
    }
    this.target$ = JSON.parse(changes.menuItem.currentValue).target;
    this.linkPath$ = JSON.parse(changes.menuItem.currentValue).linkPath;
    this.active$ = JSON.parse(changes.menuItem.currentValue).active;
  }
}