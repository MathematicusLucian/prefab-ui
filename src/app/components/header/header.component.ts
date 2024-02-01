import { Component, Input, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuBlockComponent } from '../menu-block/menu-block.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHamburger } from '@fortawesome/free-solid-svg-icons';
import { Router, RouterLink } from '@angular/router';
import { Observable } from 'rxjs';
import { TextHeadingComponent } from '../text-heading/text-heading.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, MenuBlockComponent, TextHeadingComponent, FontAwesomeModule],
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
  faHamburger = faHamburger;

  constructor(private router: Router) {
    this.router.events.subscribe((val: any) => this.hamburgerOpen = false);
  }

  ngOnInit() {
    // const componentRef = this.view.createComponent(MenuBlockComponent);
    // componentRef.instance.colorScheme = '';
    // componentRef.instance.menuItem = '';
  } 

  toggleHamburger(): void {
    this.hamburgerOpen = !this.hamburgerOpen;
  }

}