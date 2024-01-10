import { Component, OnInit } from '@angular/core';
import { TextHeadingComponent } from '../../components/text-heading/text-heading.component';
import { BioComponent } from '../../components/bio/bio.component';
import { SkillComponent } from '../../components/skill/skill.component';
import { BlockExperienceComponent } from '../../components/block-experience/block-experience.component';
import { BlogComponent } from '../blog/blog.component';
import { FlexLayoutModule } from "@angular/flex-layout";
import { FlexLayoutServerModule } from '@angular/flex-layout/server';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import MagicGrid from 'magic-grid';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, TextHeadingComponent, BioComponent, SkillComponent, BlockExperienceComponent, BlogComponent, MatCardModule, FlexLayoutModule, FlexLayoutServerModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.sass'
})
export class HomeComponent implements OnInit {
  gridColumns = 3;
  cards = [{},{},{},{},{}];

  constructor() {}

  ngOnInit() {
    let magicGrid = new MagicGrid({
      container: "#magic-grid", 
      items: this.cards.length,
      gutter: 3,
      maxColumns: 5,
      useMin: true,
      useTransform: true,
      animate: true, 
    });
    magicGrid.listen();
    magicGrid.positionItems();
  }
}