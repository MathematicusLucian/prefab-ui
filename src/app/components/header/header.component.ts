import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FontAwesomeModule, MatToolbarModule, MatTooltipModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.sass'
})
export class HeaderComponent {
  faGithub = faGithub;
  faLinkedin = faLinkedin;
  faEnvelope = faEnvelope;
  HeaderTitle = "Luke Jones";

  constructor() {
  }

  ngOnInit(): void {
  }

  goToLink(event: { button: number; }, url: string): void {
    if (event.button === 0 || event.button === 1) {
      window.open(url, '_blank');
    }
  }

  goToPage(event: { button: number; }, url: string): void {
    if (event.button === 0 || event.button === 1) {
      window.location.href = url;
    }
  }

  home(event: MouseEvent): void {
    if (event.button === 0) {
      window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
    } else if (event.button === 1) {
      window.open(window.location.href, '_blank');
    }
  }

}
