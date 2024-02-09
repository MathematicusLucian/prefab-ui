import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ComponentRef, OnInit, OnChanges, ViewChild, ViewContainerRef, inject, OnDestroy } from "@angular/core";

import { AppValues } from "../../core/config/enums";
import { HeadingComponent } from "../../shared/atoms/text-heading/text-heading.component";
import { TaglineComponent } from "../../shared/atoms/tagline/tagline.component";
import { TaglineSmallComponent } from "../../shared/atoms/tagline-small/tagline-small.component";
import { SkillsComponent } from "../../shared/organisms/skills/skills.component";
import { MenuItemComponent } from "../../shared/atoms/menu-item/menu-item.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { faGithub, faLinkedin, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faGlobe, faLocationPin, faBriefcase, faCode, faUserPlus, faFileLines } from "@fortawesome/free-solid-svg-icons";
import { ButtonComponent } from "../../shared/atoms/button/button.component";
import { SiteGraphService } from "../../core/services/site-graph/site-graph.service";
import { MenuBlockComponent } from "../../shared/molecules/menu-block/menu-block.component";
import { BehaviorSubject } from "rxjs";

@Component({
	selector: "app-home",
	standalone: true,
	imports: [HeadingComponent, TaglineComponent, TaglineSmallComponent, ButtonComponent, MenuItemComponent, SkillsComponent, FontAwesomeModule],
	templateUrl: "./home.component.html",
	styleUrl: "./home.component.sass",
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit, OnChanges, OnDestroy {
  @ViewChild("vcr", { static: true, read: ViewContainerRef })
  	vcr!: ViewContainerRef;
  componentFactoryItems: ComponentRef<MenuBlockComponent>[] = [];
  cdr = inject(ChangeDetectorRef);
  private linksMenuData$: BehaviorSubject<any> = new BehaviorSubject<any>({});
  appValues = AppValues;
  faBriefcase = faBriefcase;
  faGlobe = faGlobe;
  faLocationPin = faLocationPin;
  faCode = faCode;
  faUserPlus = faUserPlus;
  faFileLines = faFileLines;
  faLinkedin = faLinkedin;
  faGithub = faGithub;
  faXTwitter = faXTwitter;
  blockName = "home";
  homeData$!: any;
  linksMenuData!: any;
  skillsData$!: any;
  skillsCategoriesData$!: any;

  constructor(private siteGraphService: SiteGraphService) {}

  ngOnInit() {
  	// this.homeData$ = this.siteGraphService.fetchBlocks(this.blockName);
  	this.linksMenuData = this.siteGraphService.fetchBlocks("menu_links");
  	this.skillsData$ = this.siteGraphService.fetchBlocks("tags");
    this.skillsData$.subscribe((x: any) => {
      // console.log('x', x);
    });
  	this.skillsCategoriesData$ = this.siteGraphService.fetchBlocks("categories");
  	this.renderDynamicComponents(null);
  }

  ngOnChanges() {
  	this.renderDynamicComponents(null);
  }

  renderDynamicComponents(component?: any) {
  	this.vcr.clear();
  	const componentFactoryItem2 = this.vcr.createComponent(MenuBlockComponent);
  	componentFactoryItem2.instance.menuData$ = this.linksMenuData;
  	componentFactoryItem2.instance.colorScheme = "light";
  	componentFactoryItem2.instance.isRightLeaning = "false";
  	this.componentFactoryItems.push(componentFactoryItem2);
  	this.cdr.detectChanges();
  }

  ngOnDestroy(): void {
  	for (const componentFactoryItem of this.componentFactoryItems) {
  		if (componentFactoryItem) {
  			componentFactoryItem.destroy();
  		}
  	}
  }
}