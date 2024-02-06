import { AfterViewInit, ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterLink, RouterLinkActive, RouterOutlet } from "@angular/router";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { faGithub, faLinkedin, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export interface MenuItem {
  title: string;
  icon: string;
  target: string;
  linkPath: string;
  active: string;
}

@Component({
	selector: "app-menu-item",
	standalone: true,
	imports: [CommonModule, RouterLink, RouterLinkActive, RouterOutlet, FontAwesomeModule],
	templateUrl: "./menu-item.component.html",
	styleUrl: "./menu-item.component.sass",
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuItemComponent implements OnChanges, AfterViewInit {
	menuItem$!:any;
	icon: any;
	faIconData = faGithub;
	icons: Array<any> = [
		{ 
			name: "faGithub", 
			iconData: faGithub
		},
		{ 
			name: "faLinkedin", 
			iconData: faLinkedin
		},
		{ 
			name: "faEnvelope", 
			iconData: faEnvelope
		},
		{ 
			name: "faXTwitter", 
			iconData: faXTwitter
		}
	];
	title$: string = "";
	target$: string = "";
	linkPath$: string = "";
	active$: boolean = false;
	bgActiveColor: any;
	bgColor: any;
	bgHoverColor: any;
	textActiveColor: any;
	textColor: any;
	isDarkScheme: any;
  @Input() set colorScheme (color: any) {
		this.isDarkScheme = (color=="dark");
	}
  @Input() set menuItem(menuItem$: any) {
  	this.menuItem$ = menuItem$;
  	this.title$ = this.menuItem$.title;
  	this.icon = this.menuItem$.icon;
  	if(this.icon) {
  		const iconData = this.icons.find((x) => x.name == this.icon).iconData;
  		this.faIconData = iconData;
  	}
  	this.target$ = this.menuItem$.target;
  	this.linkPath$ = this.menuItem$.linkPath;
  	this.active$ = this.menuItem$.active;
  	this.setColorScheme(); 
  }

  constructor(){ } 

  ngOnChanges(changes: SimpleChanges) {
  }

  ngAfterViewInit() {
  }

  setColorScheme() {
  	if(this.colorScheme=="dark"){
  		this.bgActiveColor = "bg-pink-700";
  		this.bgColor = "bg-pink";
  		this.bgHoverColor = "bg-amber-500";
  		this.textActiveColor = "text-white";
  		this.textColor = "text-slate-950";
  	}
  }
}