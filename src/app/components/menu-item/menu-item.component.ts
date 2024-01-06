import { Component, Input, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-menu-item',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet],
  templateUrl: './menu-item.component.html',
  styleUrl: './menu-item.component.sass'
})
export class MenuItemComponent implements OnChanges {
  @Input() title: string = "";
  @Input() linkPath: string = "";
  title$: any = [];
  linkPath$: any = [];

  ngOnChanges(changes: any) {
    console.log('ABC', changes.linkPath.currentValue);
    this.title$ = changes.title.currentValue;
    this.linkPath$ = changes.linkPath.currentValue;
  }
}