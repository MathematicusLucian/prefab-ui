import { Component, OnInit, OnChanges } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AppValues } from "../../core/config/enums";
import { Observable, of } from "rxjs";
import { HeadingBlock } from "../../shared/models/heading-block.model";
import { HeadingBlockComponent } from "../../shared/molecules/heading-block/heading-block.component";
import { SkillsComponent } from "../../shared/organisms/skills/skills.component";
import { BioComponent } from "../../shared/organisms/bio/bio.component";
import { BlockExperienceComponent } from "../../shared/molecules/block-experience/block-experience.component";
import { SiteGraphService } from "../../core/services/site-graph/site-graph.service";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

@Component({
	selector: "app-resume",
	standalone: true,
	imports: [CommonModule, HeadingBlockComponent, BioComponent, SkillsComponent, BlockExperienceComponent, FontAwesomeModule],
	templateUrl: "./resume.component.html",
	styleUrl: "./resume.component.sass"
})
export class ResumeComponent implements OnInit, OnChanges {
	faLinkedin = faLinkedin;
	appValues = AppValues;
	headingData$: Observable<HeadingBlock> = of({
		headingText: this.appValues.CV_HEADING_TEXT,
		taglineText: this.appValues.CV_TAGLINE,
		taglineSmallText: this.appValues.CV_TAGLINE_SMALL,
		alignment: this.appValues.HEADERBLOCK_ALIGNMENT_NONE,
		mb: this.appValues.HEADERBLOCK_MB
	});
	blockName = "resume_item";
	resumeData$!: any;
	skillsData$!: any;
	skillsCategoriesData$!: any;
	resumeItems$: any[] = [];
	isResumeItems: boolean = false;

	constructor(private siteGraphService: SiteGraphService) {}

	ngOnInit(): void {
		this.resumeData$ = this.siteGraphService.fetchBlocks(this.blockName);
		this.resumeData$.subscribe((x: any) => {
			if(x.length>0) this.isResumeItems = true;
			this.resumeItems$ = x;
			// }
		});  
		this.skillsData$ = this.siteGraphService.fetchBlocks("tags");
		this.skillsCategoriesData$ = this.siteGraphService.fetchBlocks("categories");
	}

	ngOnChanges(changes: any) { }

	hasContent(x: any) {
		return (x.length>0);
	}
}