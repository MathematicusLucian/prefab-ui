import { Component } from '@angular/core';
import { BioPhotoComponent } from '../bio-photo/bio-photo.component';
import { BioTextBlockComponent } from '../bio-text-block/bio-text-block.component';
import { FlexLayoutModule } from "@angular/flex-layout";
import { FlexLayoutServerModule } from '@angular/flex-layout/server';

@Component({
  selector: 'app-bio',
  standalone: true,
  imports: [BioPhotoComponent, BioTextBlockComponent, FlexLayoutModule, FlexLayoutServerModule],
  templateUrl: './bio.component.html',
  styleUrl: './bio.component.sass'
})
export class BioComponent {
}
