import { AfterViewInit, ChangeDetectorRef, Component, ComponentRef, Input, OnInit, OnChanges, OnDestroy, SimpleChanges, ViewChild, ViewContainerRef, inject, ChangeDetectionStrategy } from '@angular/core';
import { MenuItemComponent } from '../../atoms/menu-item/menu-item.component';
import { CommonModule } from '@angular/common';
import { of } from 'rxjs';

@Component({
  selector: 'app-menu-block',
  standalone: true,
  imports: [CommonModule, MenuItemComponent],
  templateUrl: './menu-block.component.html',
  styleUrl: './menu-block.component.sass',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuBlockComponent implements OnInit, OnChanges {
  @ViewChild('vcr', { static: true, read: ViewContainerRef })
  vcr!: ViewContainerRef;
  componentFactoryItems: ComponentRef<MenuItemComponent>[] = [];
  cdr = inject(ChangeDetectorRef);
  @Input() menuData$!: any;
  @Input() colorScheme!: string;
  @Input() isRightLeaning!: any;
  menuDataX!: any;
  menuItemCSSGeneral = " block md:inline-block font-medium p-4 md:p-0 mt-4 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 ";
  // menuItemCSSGeneral = " block md:inline-block font-medium p-4 md:p-0 mt-4 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 ";
  menuItemCSSCenter = " items-center justify-center text-center w-full lg:flex-1 ";
  menuItemCSSRight = " lg:flex-1 lg:justify-end space-x-4 ";
  // menuItemCSSRight = " lg:justify-end space-x-4 md:w-/5 ";
  menuItemCSS = this.menuItemCSSGeneral;

  ngOnInit() { }
  
  ngOnChanges(changes: SimpleChanges) {
  }

  renderDynamicComponents(components?: any) {
    this.vcr.clear();

    components.forEach((element: any) => {
      const componentFactoryItem = this.vcr.createComponent(MenuItemComponent);
      componentFactoryItem.instance.menuItem = element;
      componentFactoryItem.instance.colorScheme = this.colorScheme;
      this.componentFactoryItems.push(componentFactoryItem);
    });

    this.cdr.detectChanges();
  }

  ngAfterViewInit() {
    this.menuData$.subscribe((x: any) => {
      if(x.length>0) {
        let clone = JSON.parse(JSON.stringify(x));
        if (this.isRightLeaning == "true") {
          clone.sort((a:any, b:any) => a.order - b.order);
        }
        (this.isRightLeaning == "true")
        ? this.menuItemCSS = this.menuItemCSSGeneral + this.menuItemCSSRight
        : this.menuItemCSS = this.menuItemCSSGeneral + this.menuItemCSSCenter;
        this.renderDynamicComponents(clone);
      }
    });
  }

  ngOnDestroy(): void {
    for (const componentFactoryItem of this.componentFactoryItems) {
      if (componentFactoryItem) {
        componentFactoryItem.destroy();
      }
    }
  }

}
