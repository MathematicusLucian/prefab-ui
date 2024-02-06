import { Component } from "@angular/core";
import { Observable, of, switchMap } from "rxjs";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { FormBuilder } from "@angular/forms";
import { SiteGraphService } from "../../core/services/site-graph/site-graph.service";
import { HeadingBlockComponent } from "../../shared/molecules/heading-block/heading-block.component";
import { encode } from "html-entities";
import { HeadingBlock } from "../../shared/models/heading-block.model";
import { AppValues } from "../../core/config/enums";

@Component({
	selector: "app-add-content",
	standalone: true,
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		HeadingBlockComponent
	],
	templateUrl: "./add-content.component.html",
	styleUrl: "./add-content.component.sass"
})
export class AddContentComponent {
	appValues = AppValues;
	headingData$: Observable<HeadingBlock> = of({
		headingText: "Add Content",
		taglineText: "",
		taglineSmallText: "",
		alignment: this.appValues.HEADERBLOCK_ALIGNMENT_NONE,
		mb: this.appValues.HEADERBLOCK_MB
	});
	newContentForm = this.formBuilder.group({
		collectionName: "",
		collectionDataJSON: "",
		encode_key: "",
		encode_value: ""
	});

	constructor(
    private siteGraphService: SiteGraphService,
    private formBuilder: FormBuilder
	){}

	addContent() {
		const contentStr = this.newContentForm.value.collectionDataJSON || "";
		let contentObj = JSON.parse(contentStr);
		if(this.newContentForm.value.encode_key != ""){
			const k: string = this.newContentForm.value.encode_key || "a";
			const valueEncoded = encode(this.newContentForm.value.encode_value, {mode: "specialChars"});
			const encodedKeyPair = {[k]: valueEncoded};
			contentObj = {...contentObj, ...encodedKeyPair};
		}
		const collectionNewDataBelongsTo: string = this.newContentForm.value.collectionName || "";
		this.siteGraphService.addBlockItemToFireBase(collectionNewDataBelongsTo, contentObj);
		this.newContentForm.reset();
	}
}
