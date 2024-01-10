import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-block-experience',
  standalone: true,
  imports: [],
  templateUrl: './block-experience.component.html',
  styleUrl: './block-experience.component.sass'
})
export class BlockExperienceComponent {
  @Input() experienceItem: any;
}
