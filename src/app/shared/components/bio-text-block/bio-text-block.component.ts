import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable, of } from 'rxjs';
import { TextHeadingComponent } from '../text-heading/text-heading.component';
import { ParagraphComponent } from '../paragraph/paragraph.component';

@Component({
  selector: 'app-bio-text-block',
  standalone: true,
  imports: [CommonModule, TextHeadingComponent, ParagraphComponent],
  templateUrl: './bio-text-block.component.html',
  styleUrl: './bio-text-block.component.sass'
})
export class BioTextBlockComponent implements OnInit{
  @Input() headingText: string = "";
  @Input() postnominals: string = "";
  @Input() elevator: string = "";
  @Input() paragraphs$: Observable<any> = of({});

  ngOnInit() { }
}
