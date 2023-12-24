import { Component } from '@angular/core';
import { BioPhotoComponent } from '../bio-photo/bio-photo.component';
import { BioTextBlockComponent } from '../bio-text-block/bio-text-block.component';

@Component({
  selector: 'app-bio',
  standalone: true,
  imports: [BioPhotoComponent, BioTextBlockComponent],
  templateUrl: './bio.component.html',
  styleUrl: './bio.component.sass'
})
export class BioComponent {

}
