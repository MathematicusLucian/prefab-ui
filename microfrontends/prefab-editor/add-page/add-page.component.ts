import { Component } from "@angular/core";
import { Observable, of, switchMap } from "rxjs";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FormBuilder } from "@angular/forms";
import { SiteGraphService } from "../../prefab-blog/src/app/core/services/site-graph/site-graph.service";
import { HeadingBlockComponent } from "../../../prefab-components/molecules/heading-block/heading-block.component";

import { HeadingBlock } from "../../../prefab-components/models/heading-block.model";
import { EditorModule } from "@tinymce/tinymce-angular";
import { AppValues } from "../../prefab-blog/src/app/core/config/enums";
import { ENV } from "../../prefab-blog/src/environments/environment";

@Component({
	selector: "app-add-page",
	standalone: true,
	imports: [
    FormsModule,
    ReactiveFormsModule,
    HeadingBlockComponent,
    EditorModule
],
	templateUrl: "./add-page.component.html",
	styleUrl: "./add-page.component.sass"
})
export class AddPageComponent {
	appValues = AppValues;
	mceKey: any = ENV.MCE_KEY;
	mceDataModel: any;
	headingData$: Observable<HeadingBlock> = of({
		headingText: "Add Page",
		taglineText: "",
		taglineSmallText: "",
		alignment: this.appValues.HEADERBLOCK_ALIGNMENT_NONE,
		mb: this.appValues.HEADERBLOCK_MB
	});
	newContentForm = this.formBuilder.group({
		collectionName: "",
		title: "",
		blogType: "",
		parent_id: "",
		img_src: ""
	});
	html = "<p>Lorem ipsum</p>";

	constructor(
    private siteGraphService: SiteGraphService,
    private formBuilder: FormBuilder
	) { }

	// handleEvent($event: any) {
	// }

	addContent() {
		const contentStr = this.html || "";
		const collectionName: string = this.newContentForm.value.collectionName || "";
		const title: string = this.newContentForm.value.title || "";
		const slug: string = this.newContentForm.value.title ? this.newContentForm.value.title?.trim().substring(1,10) : "";
		const parent_id: string = this.newContentForm.value.parent_id || "";
		const img_src: string = this.newContentForm.value.img_src || "";
		const contentObj = {
			"content": contentStr,
			"title": title,
			"slug": slug,
			"parent_id": parent_id,
			"img_src": img_src,
			"author": 1,
			"readmore_url": "{id}/post/"
		};
		this.siteGraphService.addBlockItemToFireBase(collectionName, contentObj);
		this.newContentForm.reset();
	}
}