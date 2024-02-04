import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tagline-small',
  standalone: true,
  imports: [],
  templateUrl: './tagline-small.component.html',
  styleUrl: './tagline-small.component.sass'
})
export class TaglineSmallComponent {
  @Input() taglineText: any;
}
