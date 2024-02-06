import { ChangeDetectorRef, Component, ComponentRef, Input, OnInit, AfterViewInit, OnChanges, OnDestroy, ViewChild, ViewContainerRef, inject, ChangeDetectionStrategy, ElementRef } from "@angular/core";
import { MenuBlockComponent } from "../menu-block/menu-block.component";

import { BehaviorSubject } from "rxjs";
 
@Component({
	selector: "app-container",
	standalone: true,
	imports: [MenuBlockComponent],
	templateUrl: "./container.component.html",
	styleUrl: "./container.component.sass",
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContainerComponent implements OnInit, AfterViewInit, OnChanges, OnDestroy {
  @ViewChild("vcr", { static: true, read: ViewContainerRef })
  	vcr!: ViewContainerRef;
  componentFactoryItems: ComponentRef<MenuBlockComponent>[] = [];
  cdr = inject(ChangeDetectorRef);
  isHiddenArray!: any[];
  el!: any;
  @Input() set isHidden (value: any) {
  	this.isHiddenArray = [];
  	this.isHiddenArray.push(value);
  	const expandableContainerClasses = (this.isHiddenArray[0]==true) ?" hidden md:block " : " w-full max-w-screen-xl md:block md:w-auto pl-0 md:pl-5 mt-0 pt-0 " ;
  	if(this.el) this.el.className = expandableContainerClasses; 
  	this.ref.detectChanges();
  }
  get isHidden(): any {
  	return (this.isHiddenArray[0]==true);
  }
  hhhh!: any;
  @Input() mainMenuData!: any; 
  @Input() linksMenuData!: any;

  constructor(private ref: ChangeDetectorRef, public element: ElementRef){
  	this.el = this.element.nativeElement.querySelector("#expandable");
  }

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
  	this.renderDynamicComponents(null);
  }

  ngAfterViewInit() { }

  ngOnChanges() { }

  ngOnDestroy(): void {
  	for (const componentFactoryItem of this.componentFactoryItems) {
  		if (componentFactoryItem) {
  			componentFactoryItem.destroy();
  		}
  	}
  }
}
