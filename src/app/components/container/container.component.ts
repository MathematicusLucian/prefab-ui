import { ChangeDetectorRef, Component, ComponentRef, Input, OnInit, OnDestroy, ViewChild, ViewContainerRef, inject, ChangeDetectionStrategy } from '@angular/core';
import { MenuBlockComponent } from '../menu-block/menu-block.component';
import { CommonModule } from '@angular/common';
import { BehaviorSubject } from 'rxjs';
 
@Component({
  selector: 'app-container',
  standalone: true,
  imports: [CommonModule, MenuBlockComponent],
  templateUrl: './container.component.html',
  styleUrl: './container.component.sass',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContainerComponent implements OnInit, OnDestroy {
  @ViewChild('vcr', { static: true, read: ViewContainerRef })
  vcr!: ViewContainerRef;
  componentFactoryItems: ComponentRef<MenuBlockComponent>[] = [];
  cdr = inject(ChangeDetectorRef);
  private isHiddenContainer$: BehaviorSubject<any> = new BehaviorSubject<any>("false");
  isHiddenContainer: any = "false";
  @Input() set isHidden (value: any) {
    if(value != null) this.isHiddenContainer$.next(value);
  }
  get isHidden(): any {
    return this.isHiddenContainer$.value;
  }
  @Input() mainMenuData!: any; 
  @Input() linksMenuData!: any;

  renderDynamicComponents(component?: any) {
    this.vcr.clear();
    const componentFactoryItem = this.vcr.createComponent(MenuBlockComponent);
    componentFactoryItem.instance.menuData$ = this.mainMenuData;
    componentFactoryItem.instance.colorScheme = "dark";
    componentFactoryItem.instance.isRightLeaning = "true";
    this.componentFactoryItems.push(componentFactoryItem);
    const componentFactoryItem2 = this.vcr.createComponent(MenuBlockComponent);
    componentFactoryItem2.instance.menuData$ = this.linksMenuData;
    componentFactoryItem2.instance.colorScheme = "dark";
    componentFactoryItem2.instance.isRightLeaning = "true";
    this.componentFactoryItems.push(componentFactoryItem2);
    this.cdr.detectChanges();
  }

  ngOnInit() {
    this.isHiddenContainer$.subscribe((isHidden: any) => {
      this.isHiddenContainer = isHidden;
    });
    this.renderDynamicComponents(null);
  }

  ngOnDestroy(): void {
    for (const componentFactoryItem of this.componentFactoryItems) {
      if (componentFactoryItem) {
        componentFactoryItem.destroy();
      }
    }
  }
}
