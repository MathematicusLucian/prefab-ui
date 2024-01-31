import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuItemComponent } from '../menu-item/menu-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHamburger } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, MenuItemComponent, FontAwesomeModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.sass'
})
export class HeaderComponent implements OnInit {
  @Input() headerData!: Observable<any[]>; 
  @Input() mainMenuData!: any; 
  @Input() linksMenuData!: any; 
  hamburgerOpen = false;
  headerTitle = "Luke Jones";
  faHamburger = faHamburger;
  mainMenu: any;
  linksMenu: any;

  constructor(private router: Router) {
    this.router.events.subscribe((val: any) => this.hamburgerOpen = false);
  }

  ngOnInit() { 
  } 
  
  ngOnChanges(changes: any) {
    this.mainMenuData.subscribe((x: any) => {
      if(x.length>0) this.mainMenu = x;
    })
    this.linksMenuData.subscribe((x: any) => {
      if(x.length>0) this.linksMenu = x;
    })
  }

  toggleHamburger(): void {
    this.hamburgerOpen = !this.hamburgerOpen;
  }

}