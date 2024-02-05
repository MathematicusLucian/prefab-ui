import { Component } from '@angular/core';
import { AppValues } from '../../../core/config/enums';
import { Observable, of } from 'rxjs';
import { BioPhotoComponent } from '../../atoms/bio-photo/bio-photo.component';
import { BioTextBlockComponent } from '../../molecules/bio-text-block/bio-text-block.component';

@Component({
  selector: 'app-bio',
  standalone: true,
  imports: [BioPhotoComponent, BioTextBlockComponent],
  templateUrl: './bio.component.html',
  styleUrl: './bio.component.sass'
})
export class BioComponent {
  appValues = AppValues;
  headingText: string = this.appValues.PORTFOLIO_OWNER;
  postnominals: string = this.appValues.PORTFOLIO_OWNER_POSTNOMINALS;
  elevator: string = this.appValues.PORTFOLIO_ELEVATOR;
  paragraphs$: Observable<any> = of([{
    title: this.appValues.CV_PAR_1_HEADING,
    body: this.appValues.CV_PAR_1_BODY
  },{
    title: this.appValues.CV_PAR_2_HEADING,
    body: this.appValues.CV_PAR_2_BODY
  },{
    title: this.appValues.CV_PAR_3_HEADING,
    body: this.appValues.CV_PAR_3_BODY
  }]);

}
