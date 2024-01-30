import { Component } from '@angular/core';
import { Observable, of, switchMap } from 'rxjs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { serverTimestamp } from 'firebase/firestore';
import { SiteGraphService } from '../../core/services/site-graph/site-graph.service';
import { HeadingBlockComponent } from '../../components/heading-block/heading-block.component';
import { CommonModule } from '@angular/common';
import { HeadingBlock } from '../../shared/models/heading-block.model';
import { AppValues } from '../../core/config/enums';

@Component({
  selector: 'app-add-content',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HeadingBlockComponent
  ],
  templateUrl: './add-content.component.html',
  styleUrl: './add-content.component.sass'
})
export class AddContentComponent {
  appValues = AppValues;
  headingData$: Observable<HeadingBlock> = of({
    headingText: 'Add Content',
    taglineText: '',
    taglineSmallText: '',
    alignment: this.appValues.HEADERBLOCK_ALIGNMENT_NONE,
    mb: this.appValues.HEADERBLOCK_MB
  });
  newContentForm = this.formBuilder.group({
    collectionName: '',
    collectionDataJSON: ''
  });

  constructor(
    private siteGraphService: SiteGraphService,
    private formBuilder: FormBuilder
  ){
    console.log('addc');
  }

  addContent() {
    let contentStr = this.newContentForm.value.collectionDataJSON || "";
    let contentObj = JSON.parse(contentStr);
    const collectionNewDataBelongsTo: string = this.newContentForm.value.collectionName || "";
    this.siteGraphService.addBlockItemToFireBase(collectionNewDataBelongsTo, contentObj);
    this.newContentForm.reset();
  }
}
