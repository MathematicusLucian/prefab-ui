import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ComponentRef, Input, OnDestroy, OnInit, ViewChild, ViewContainerRef, inject } from '@angular/core';
import { CommonModule, NgComponentOutlet } from '@angular/common';
import { MenuBlockComponent } from '../menu-block/menu-block.component';
import { Router, RouterLink } from '@angular/router';
import { Observable } from 'rxjs';
import { TextHeadingComponent } from '../text-heading/text-heading.component';
import { ToggleButtonComponent } from '../toggle-button/toggle-button.component';
import { ContainerComponent } from '../container/container.component';
import { BehaviorSubject, of } from 'rxjs';
import _ from 'lodash';
import { faHamburger } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, NgComponentOutlet, RouterLink, TextHeadingComponent, ToggleButtonComponent, ContainerComponent, MenuBlockComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.sass',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('vcr', { static: true, read: ViewContainerRef })
  vcr!: ViewContainerRef;
  componentFactoryItems: ComponentRef<TextHeadingComponent | ToggleButtonComponent | ContainerComponent | MenuBlockComponent >[] = [];
  cdr = inject(ChangeDetectorRef);
  @Input() headerData!: Observable<any[]>; 
  @Input() mainMenuData!: any; 
  @Input() linksMenuData!: any;
  isHiddenContainer$: BehaviorSubject<any> = new BehaviorSubject<any>("false");

  constructor(private router: Router) { }

  renderDynamicComponents(component?: any): void {
    // Alternate approach: https://angular.io/guide/dynamic-component-loader

    this.vcr.clear();

     const componentsImported = [
        {
          "componentType": "TextHeading",
          "props" : [
            { "headingText": "MathematicusLucian.com" },
            { "fontWeight": "semibold "},
            { "alignment": "alignment" },
            { "mb": "none" },
            { "routerLink": "/home/" },
            { "textColor": "black" },
            { "textSize": "16" }
          ]
        },
        {
          "componentType": "TextHeading",
          "props" : [
            { "headingText": "Luke Jones" },
            { "fontWeight": "normal "},
            { "alignment": "alignment" },
            { "mb": "mb" },
            { "routerLink": "/home/" },
            { "textColor": "black" },
            { "textSize": "12" }
          ]
        },
      ]; 

      componentsImported.map((x:any) => {
        const componentFactoryItem = this.vcr.createComponent(TextHeadingComponent);
        x.props.map((y: any) => {
          componentFactoryItem.setInput(Object.keys(y)[0], y[Object.keys(y)[0]]);
        });
        this.componentFactoryItems.push(componentFactoryItem);
      });

      const componentFactoryItem2 = this.vcr.createComponent(ToggleButtonComponent);
      componentFactoryItem2.instance.toggleIcon = faHamburger;
      componentFactoryItem2.instance.isToggleOpen.subscribe((isOpen: any) => {
        this.isHiddenContainer$.next(!isOpen);
      });
      this.componentFactoryItems.push(componentFactoryItem2);

      const componentFactoryItem3 = this.vcr.createComponent(ContainerComponent);
      this.isHiddenContainer$.subscribe((x: any) => {
        componentFactoryItem3.instance.isHidden = x;
      });
      componentFactoryItem3.instance.mainMenuData = this.mainMenuData;
      componentFactoryItem3.instance.linksMenuData = this.linksMenuData;
      this.componentFactoryItems.push(componentFactoryItem3);

    this.cdr.detectChanges();
  }

  ngOnInit(): void {
    this.renderDynamicComponents(null);
  }

  ngAfterViewInit(): void {
  }

  ngOnChanges = (): void => { } 

  ngOnDestroy(): void {
    for (const componentFactoryItem of this.componentFactoryItems) {
      if (componentFactoryItem) {
        componentFactoryItem.destroy();
      }
    }
  }

}