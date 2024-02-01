import { Component, Input, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGithub, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons';
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
  @Input() colorScheme: any;
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
    },
    { 
      name: 'faXTwitter', 
      iconData: faXTwitter
    }
  ];
  title$: string = "";
  target$: string = "";
  linkPath$: string = "";
  active$: boolean = false;
  bgActiveColor: any;
  bgColor: any;
  bgHoverColor: any;
  textActiveColor: any;
  textColor: any;
  isDarkScheme: any;

  constructor(){
  } 

  ngOnChanges(changes: any) {
    this.isDarkScheme = (this.colorScheme=="dark");
    this.title$ = JSON.parse(changes.menuItem.currentValue).title;
    this.icon = JSON.parse(changes.menuItem.currentValue).icon;
    if(this.icon) {
      let iconData = this.icons.find((x) => x.name == this.icon).iconData;
      this.faIconData = iconData;
    }
    this.target$ = JSON.parse(changes.menuItem.currentValue).target;
    this.linkPath$ = JSON.parse(changes.menuItem.currentValue).linkPath;
    this.active$ = JSON.parse(changes.menuItem.currentValue).active;
    this.setColorScheme();
  }

  setColorScheme() {
    if(this.colorScheme=="dark"){
      this.bgActiveColor = "bg-pink-700";
      this.bgColor = "bg-pink";
      this.bgHoverColor = "bg-amber-500";
      this.textActiveColor = "text-white";
      this.textColor = "text-slate-950";
    }
  }
}