import { Component, Output, OnInit, EventEmitter } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHamburger } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-hamburger-button',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './hamburger-button.component.html',
  styleUrl: './hamburger-button.component.sass'
})
export class HamburgerButtonComponent implements OnInit {
  @Output() isHamburgerOpen: EventEmitter<any> = new EventEmitter();
  faHamburger = faHamburger;
  isOpen = false;

  ngOnInit() {
    this.isHamburgerOpen.emit(this.isOpen);
  }

  toggleHamburger(): void {
    this.isOpen = !this.isOpen;
    this.isHamburgerOpen.emit(this.isOpen);
  }
}