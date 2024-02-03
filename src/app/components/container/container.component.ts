import { AfterViewInit, ChangeDetectorRef, Component, ComponentRef, Input, OnInit, OnChanges, OnDestroy, SimpleChanges, ViewChild, ViewContainerRef, inject } from '@angular/core';
import { MenuBlockComponent } from '../menu-block/menu-block.component';
import { CommonModule } from '@angular/common';
import { BehaviorSubject } from 'rxjs';
import { of } from 'rxjs';
 
@Component({
  selector: 'app-container',
  standalone: true,
  imports: [CommonModule, MenuBlockComponent],
  templateUrl: './container.component.html',
  styleUrl: './container.component.sass'
})
export class ContainerComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {
  private isHiddenContainer$: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  @ViewChild('vcr', { static: true, read: ViewContainerRef })
  vcr!: ViewContainerRef;
  componentRefs: ComponentRef<MenuBlockComponent>[] = [];
  cdr = inject(ChangeDetectorRef);
  isHiddenContainer: any;
  @Input() set isHidden (value: any) {
    console.log('x-1', value);
    this.isHiddenContainer$.next(value);
  }
  get isHidden(): any {
    return this.isHiddenContainer$.value;
  }
  // @Input() isHidden!: any; 
  @Input() mainMenuData!: any; 
  @Input() linksMenuData!: any;

  renderDynamicComponents(component?: any) {
    this.vcr.clear();
    const componentRef = this.vcr.createComponent(MenuBlockComponent);
    componentRef.instance.menuData$ = this.mainMenuData;
    componentRef.instance.colorScheme = "dark";
    componentRef.instance.isRightLeaning = "true";
    this.componentRefs.push(componentRef);
    const componentRef2 = this.vcr.createComponent(MenuBlockComponent);
    componentRef2.instance.menuData$ = this.linksMenuData;
    componentRef2.instance.colorScheme = "dark";
    componentRef2.instance.isRightLeaning = "true";
    this.componentRefs.push(componentRef2);
    this.cdr.detectChanges();
  }

  ngOnInit() {
    this.isHiddenContainer$.subscribe((x:any) => console.log('x', x));
    this.renderDynamicComponents(null);
  }

  ngAfterViewInit() { }

  ngOnChanges(changes: SimpleChanges): void { 
    this.isHiddenContainer$.subscribe((value: any) => {
      value.subscribe((x:any) => console.log('xxx', x));
      console.log('x0', value);
      this.isHiddenContainer = value;
      console.log('x0+', this.isHiddenContainer);
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
