import { AfterViewInit, ChangeDetectorRef, Component, ComponentRef, Input, OnInit, OnChanges, OnDestroy, SimpleChanges, ViewChild, ViewContainerRef, inject } from '@angular/core';
import { MenuItemComponent } from '../menu-item/menu-item.component';
import { CommonModule } from '@angular/common';
import { of } from 'rxjs';

@Component({
  selector: 'app-menu-block',
  standalone: true,
  imports: [CommonModule, MenuItemComponent],
  templateUrl: './menu-block.component.html',
  styleUrl: './menu-block.component.sass'
})
export class MenuBlockComponent implements OnInit, OnChanges {
  @ViewChild('vcr', { static: true, read: ViewContainerRef })
  vcr!: ViewContainerRef;
  componentRefs: ComponentRef<MenuItemComponent>[] = [];
  cdr = inject(ChangeDetectorRef);
  @Input() menuData$!: any;
  @Input() colorScheme!: string;
  @Input() isRightLeaning!: any;
  menuDataX!: any;
  menuItemCSSGeneral = " block md:inline-block font-medium p-4 md:p-0 mt-4 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 ";
  menuItemCSSRight = " lg:flex-1 lg:justify-end space-x-4 ";
  menuItemCSS = this.menuItemCSSGeneral;

  ngOnInit() {
  }
  
  ngOnChanges(changes: SimpleChanges) {
    if(this.isRightLeaning == "true") {
      this.menuItemCSS += this.menuItemCSSRight;
    }
  }

  renderDynamicComponents(components?: any) {
    this.vcr.clear();

    components.forEach((element: any) => {
      const componentRef = this.vcr.createComponent(MenuItemComponent);
      componentRef.instance.menuItem = element;
      componentRef.instance.colorScheme = this.colorScheme;
      this.componentRefs.push(componentRef);
    });

    this.cdr.detectChanges();
  }

  ngAfterViewInit() {
    this.menuData$.subscribe((x: any) => {
      if(x.length>0) {
        let clone = JSON.parse(JSON.stringify(x));
        clone.sort((a:any, b:any) => a.order - b.order)
        this.renderDynamicComponents(clone);
      }
    });
  }

  ngOnDestroy(): void {
    for (const componentRef of this.componentRefs) {
      if (componentRef) {
        componentRef.destroy();
      }
    }
  }

}
