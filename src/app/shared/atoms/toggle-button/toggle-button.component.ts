import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHamburger } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-toggle-button',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './toggle-button.component.html',
  styleUrl: './toggle-button.component.sass'
})
export class ToggleButtonComponent implements OnInit {
  @Input() toggleIcon!: any;
  @Output() isToggleOpen: EventEmitter<any> = new EventEmitter();
  isOpen = false;

  ngOnInit() {
    this.isToggleOpen.emit(this.isOpen);
  }

  toggle(): void {
    this.isOpen = !this.isOpen;
    this.isToggleOpen.emit(this.isOpen);
  }
}