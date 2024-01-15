import { Component } from '@angular/core';
import { AppValues } from '../../core/config/enums';
import { Observable, of } from 'rxjs';
import { HeadingBlock } from '../../shared/models/heading-block.model';
import { HeadingBlockComponent } from '../../components/heading-block/heading-block.component';

@Component({
  selector: 'app-tags',
  standalone: true,
  imports: [HeadingBlockComponent],
  templateUrl: './tags.component.html',
  styleUrl: './tags.component.sass'
})
export class TagsComponent {
  appValues = AppValues;
  headingData$: Observable<HeadingBlock> = of({
    headingText: this.appValues.TAGS_HEADING_TEXT,
    taglineText: this.appValues.TAGS_TAGLINE,
    taglineSmallText: this.appValues.TAGS_TAGLINE_SMALL,
    alignment: this.appValues.HEADERBLOCK_ALIGNMENT_NONE,
    mb: this.appValues.HEADERBLOCK_MB
  });
}