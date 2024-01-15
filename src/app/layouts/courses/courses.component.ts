import { Component } from '@angular/core';
import { AppValues } from '../../core/config/enums';
import { Observable, of } from 'rxjs';
import { HeadingBlock } from '../../shared/models/heading-block.model';
import { HeadingBlockComponent } from '../../components/heading-block/heading-block.component';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [HeadingBlockComponent],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.sass'
})
export class CoursesComponent {
  appValues = AppValues;
  headingData$: Observable<HeadingBlock> = of({
    headingText: this.appValues.COURSES_HEADING_TEXT,
    taglineText: this.appValues.COURSES_TAGLINE,
    taglineSmallText: this.appValues.COURSES_TAGLINE_SMALL,
    alignment: this.appValues.HEADERBLOCK_ALIGNMENT_NONE,
    mb: this.appValues.HEADERBLOCK_MB
  });
}