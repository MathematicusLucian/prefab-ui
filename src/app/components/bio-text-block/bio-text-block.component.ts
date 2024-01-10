import { Component } from '@angular/core';
import { TextHeadingComponent } from '../text-heading/text-heading.component';

@Component({
  selector: 'app-bio-text-block',
  standalone: true,
  imports: [TextHeadingComponent],
  templateUrl: './bio-text-block.component.html',
  styleUrl: './bio-text-block.component.sass'
})
export class BioTextBlockComponent {

}
