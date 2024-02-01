import { Component, Input, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuBlockComponent } from '../menu-block/menu-block.component';
import { Router, RouterLink } from '@angular/router';
import { Observable } from 'rxjs';
import { TextHeadingComponent } from '../text-heading/text-heading.component';
import { HamburgerButtonComponent } from '../hamburger-button/hamburger-button.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, MenuBlockComponent, TextHeadingComponent, HamburgerButtonComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.sass'
})
export class HeaderComponent implements OnInit {
  // @ViewChild('id', { read: ViewContainerRef }) view!: ViewContainerRef;
  @Input() headerData!: Observable<any[]>; 
  @Input() mainMenuData!: any; 
  @Input() linksMenuData!: any; 
  hamburgerOpen = false;
  headerTitle = "Luke Jones";

  constructor(private router: Router) {
    this.router.events.subscribe((val: any) => this.hamburgerOpen = false);
  }

  onHamburgerOpen(e: any) {
    this.hamburgerOpen = !this.hamburgerOpen; 
  }

  ngOnInit() {
    // const componentRef = this.view.createComponent(MenuBlockComponent);
    // componentRef.instance.colorScheme = '';
    // componentRef.instance.menuItem = '';
  } 

}