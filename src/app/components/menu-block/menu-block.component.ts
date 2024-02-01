import { Component, Input, OnChanges } from '@angular/core';
import { MenuItemComponent } from '../menu-item/menu-item.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu-block',
  standalone: true,
  imports: [CommonModule, MenuItemComponent],
  templateUrl: './menu-block.component.html',
  styleUrl: './menu-block.component.sass'
})
export class MenuBlockComponent implements OnChanges{
  @Input() menuData$!: any;
  @Input() colorScheme!: string;
  @Input() isRightLeaning!: any;
  menuData!: any;
  menuItemCSSGeneral = " block md:inline-block font-medium p-4 md:p-0 mt-4 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 ";
  menuItemCSSRight = " lg:flex-1 lg:justify-end space-x-4': isRightLeaning ";
  menuItemCSS = this.menuItemCSSGeneral;
  
  ngOnChanges(changes: any) {
    if(this.isRightLeaning == "true") {
      this.menuItemCSS += this.menuItemCSSRight;
    }
    this.menuData$.subscribe((x: any) => {
      if(x.length>0) {
        let clone = JSON.parse(JSON.stringify(x));
        clone.sort((a:any, b:any) => a.order - b.order)
        this.menuData = clone;
      }
    });
    // this.linksMenuData.subscribe((x: any) => {
    //   if(x.length>0) this.linksMenu = x;
    // })
  }

}
