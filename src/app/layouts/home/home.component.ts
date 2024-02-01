import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppValues } from '../../core/config/enums';
import { TextHeadingComponent } from '../../components/text-heading/text-heading.component';
import { TaglineComponent } from '../../components/tagline/tagline.component';
import { TaglineSmallComponent } from '../../components/tagline-small/tagline-small.component';
import { SkillsComponent } from '../../components/skills/skills.component';
import { MenuItemComponent } from '../../components/menu-item/menu-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGlobe, faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { ButtonComponent } from '../../components/button/button.component';
import { SiteGraphService } from '../../core/services/site-graph/site-graph.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, TextHeadingComponent, TaglineComponent, TaglineSmallComponent, ButtonComponent, MenuItemComponent, SkillsComponent, FontAwesomeModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.sass'
})
export class HomeComponent implements OnInit{
  appValues = AppValues;
  menuRightItems = [
    {
      "title": null,
      "icon": "faGithub",
      "linkPath": "/github/",
      "target": "_blank", 
      "active": false
    },{
      "title": null,
      "icon": "faLinkedin",
      "linkPath": "/linkedin/",
      "target": "_blank", 
      "active": false
    },{
      "title": null,
      "icon": "faEnvelope",
      "linkPath": "/contact/",
      "target": null, 
      "active": false
    }
  ];
  faBriefcase = faBriefcase;
  faGlobe = faGlobe;
  blockName = "home";
  homeData$!: any;
  skillsData$!: any;
  skillsCategoriesData$!: any;

  constructor(private siteGraphService: SiteGraphService) {}

  ngOnInit() {
 
    // this.homeData$ = this.siteGraphService.fetchBlocks(this.blockName);
    this.skillsData$ = this.siteGraphService.fetchBlocks('tags');
    this.skillsCategoriesData$ = this.siteGraphService.fetchBlocks('categories');

  }
}