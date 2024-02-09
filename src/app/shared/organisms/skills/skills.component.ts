import { Component, Input, OnInit, OnChanges, AfterViewInit, OnDestroy, ChangeDetectionStrategy } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AppValues } from "../../../core/config/enums";
import { Observable, of } from "rxjs";
import { HeadingBlock } from "../../models/heading-block.model";
import { HeadingBlockComponent } from "../../molecules/heading-block/heading-block.component";
import { BadgeComponent } from "../../atoms/badge/badge.component";
import { HeadingComponent } from "../../atoms/text-heading/text-heading.component";
import { TaglineSmallComponent } from "../../atoms/tagline-small/tagline-small.component";
import { TaglineComponent } from "../../atoms/tagline/tagline.component";
import { ActivatedRoute } from "@angular/router";
import { OrderSortPipe } from "../../pipes/order-sort.pipe";

interface SkillsData {
  name: string,
  tag: string
}
interface TagData {
  name: string
}

@Component({
    selector: "app-skills",
    standalone: true,
    templateUrl: "./skills.component.html",
    styleUrl: "./skills.component.sass",
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [CommonModule, HeadingBlockComponent, BadgeComponent, HeadingComponent, TaglineComponent, TaglineSmallComponent, OrderSortPipe]
})
export class SkillsComponent implements OnInit, AfterViewInit, OnChanges, OnDestroy {
  @Input() skillsCategoriesData$: any;
  @Input() skillsData$: any;
  appValues = AppValues;
  headingData$: Observable<HeadingBlock> = of({
  	headingText: this.appValues.SKILLS_HEADING_TEXT,
  	taglineText: this.appValues.SKILLS_TAGLINE,
  	taglineSmallText: this.appValues.SKILLS_TAGLINE_SMALL,
  	alignment: this.appValues.HEADERBLOCK_ALIGNMENT_NONE,
  	mb: this.appValues.HEADERBLOCK_MB
  });
  orderType: string = "asc"; 
  orderByField: string = "name";
  skillsCategoryChosenID = "ALL";
  sortByOrder!: OrderSortPipe;

  /**
   * Inject dependencies
   * 
   * @param {ActivatedRoute} route
   */
  constructor(
    private route: ActivatedRoute,
  ) { 
    this.sortByOrder = new OrderSortPipe();
  }

  ngOnInit(): void { }
  ngAfterViewInit(): void { 
    this.skillsCategoriesData$.subscribe((skillsCategories: any[]) => {
      if(skillsCategories && skillsCategories[0]) {
        const sorted = this.sortByOrder.transform(skillsCategories, this.orderType, this.orderByField);
        if(sorted) this.skillsCategoryChosenID = sorted[0].id
      }
    });
  }
  ngOnChanges(): void { }
  ngOnDestroy(): void { 
    // this.skillsCategoriesData$.destroy();
  }

  setChosenSkillsCategory = (skillsCategoryClickedID: string) =>
  	this.skillsCategoryChosenID = skillsCategoryClickedID;

  hasChosenSkillsCategory = (chosenSkillsParent: any): boolean =>
  	chosenSkillsParent.includes(this.skillsCategoryChosenID) || this.skillsCategoryChosenID == "ALL";

}