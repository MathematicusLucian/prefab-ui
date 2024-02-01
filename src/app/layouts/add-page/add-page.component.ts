import { Component } from '@angular/core';
import { Observable, of, switchMap } from 'rxjs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { SiteGraphService } from '../../core/services/site-graph/site-graph.service';
import { HeadingBlockComponent } from '../../components/heading-block/heading-block.component';
import { CommonModule } from '@angular/common';
import { HeadingBlock } from '../../shared/models/heading-block.model';
import { EditorModule } from '@tinymce/tinymce-angular';
import { AppValues } from '../../core/config/enums';

@Component({
  selector: 'app-add-page',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HeadingBlockComponent,
    EditorModule
  ],
  templateUrl: './add-page.component.html',
  styleUrl: './add-page.component.sass'
})
export class AddPageComponent {
  appValues = AppValues;
  mceDataModel: any;
  headingData$: Observable<HeadingBlock> = of({
    headingText: 'Add Page',
    taglineText: '',
    taglineSmallText: '',
    alignment: this.appValues.HEADERBLOCK_ALIGNMENT_NONE,
    mb: this.appValues.HEADERBLOCK_MB
  });
  newContentForm = this.formBuilder.group({
    collectionName: '',
    title: '',
    slug: '',
    blogType: ''
  });
  html = '<p>Lorem ipsum</p>';

  constructor(
    private siteGraphService: SiteGraphService,
    private formBuilder: FormBuilder
  ){}

  // handleEvent($event: any) {
  //   console.log('$event', $event);
  // }

  addContent() {
    // console.log('MCE', this.html);
    let contentStr = this.html || "";
    // console.log(this.newContentForm.value);
    const title: string = this.newContentForm.value.title || "";
    const slug: string = this.newContentForm.value.slug || "";
    let contentObj = {
      "content": contentStr,
      "title": title,
      "slug": slug,
      "author": 1,
      "category": 1
    };
    // console.log('mceDataModel', this.mceDataModel);
    const collectionNewDataBelongsTo: string = this.newContentForm.value.collectionName || "";
    this.siteGraphService.addBlockItemToFireBase(collectionNewDataBelongsTo, contentObj);
    this.newContentForm.reset();
  }
}