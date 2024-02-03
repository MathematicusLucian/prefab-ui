import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ComponentRef, Input, OnDestroy, OnInit, ViewChild, ViewContainerRef, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuBlockComponent } from '../menu-block/menu-block.component';
import { Router, RouterLink } from '@angular/router';
import { Observable } from 'rxjs';
import { TextHeadingComponent } from '../text-heading/text-heading.component';
import { HamburgerButtonComponent } from '../hamburger-button/hamburger-button.component';
import { ContainerComponent } from '../container/container.component';
import { BehaviorSubject, of } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, TextHeadingComponent, HamburgerButtonComponent, ContainerComponent, MenuBlockComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.sass',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('vcr', { static: true, read: ViewContainerRef })
  vcr!: ViewContainerRef;
  componentRefs: ComponentRef<TextHeadingComponent | HamburgerButtonComponent | ContainerComponent | MenuBlockComponent >[] = [];
  cdr = inject(ChangeDetectorRef);
  @Input() headerData!: Observable<any[]>; 
  @Input() mainMenuData!: any; 
  @Input() linksMenuData!: any;
  isHiddenContainer$: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  headerTitle = "MathematicusLucian.com";

  constructor(private router: Router) { }

  renderDynamicComponents(component?: any) {
    this.vcr.clear();
    // for (const componentType of componentsImported) {

      const componentRef = this.vcr.createComponent(TextHeadingComponent);
      componentRef.instance.headingText = this.headerTitle;
      componentRef.instance.alignment = "alignment";
      componentRef.instance.mb = "mb";
      componentRef.instance.routerLink = "/home/";
      componentRef.instance.textColor = "black";
      this.componentRefs.push(componentRef);

      const componentRef2 = this.vcr.createComponent(HamburgerButtonComponent);
      componentRef2.instance.isHamburgerOpen.subscribe(event => {
        this.isHiddenContainer$.next(event);
      });
      this.componentRefs.push(componentRef2);

      const componentRef3 = this.vcr.createComponent(ContainerComponent);
      componentRef3.instance.isHidden = this.isHiddenContainer$.getValue();
      componentRef3.instance.mainMenuData = this.mainMenuData;
      componentRef3.instance.linksMenuData = this.linksMenuData;
      this.componentRefs.push(componentRef3);

    // }
    this.cdr.detectChanges();
  }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    this.renderDynamicComponents(null);
  }

  ngOnChanges = (): void => { } 

  ngOnDestroy(): void {
    for (const componentRef of this.componentRefs) {
      if (componentRef) {
        componentRef.destroy();
      }
    }
  }

}