import { Component, Output, EventEmitter } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHamburger } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-hamburger-button',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './hamburger-button.component.html',
  styleUrl: './hamburger-button.component.sass'
})
export class HamburgerButtonComponent {
  @Output() isHamburgerOpen: EventEmitter<any> = new EventEmitter();
  faHamburger = faHamburger;
  isOpen = false;

  toggleHamburger(): void {
    this.isOpen = !this.isOpen;
    this.isHamburgerOpen.emit(this.isOpen);
  }
}