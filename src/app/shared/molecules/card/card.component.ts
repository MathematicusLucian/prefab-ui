
import { AfterViewInit, Component, Input, OnChanges, OnInit } from "@angular/core";
import { ButtonComponent } from "../../atoms/button/button.component";
import { decode } from "html-entities";
import { Router, RouterLink } from "@angular/router";

export interface Card {
  readmore_url: string;
  img_src: string;
  title: string;
  content: string;
  id: string;
}

@Component({
	selector: "app-card",
	standalone: true,
	imports: [ButtonComponent, RouterLink],
	templateUrl: "./card.component.html",
	styleUrl: "./card.component.sass"
})
export class CardComponent implements OnInit, AfterViewInit, OnChanges {
  @Input() cardDetails!: Card | any;
  cardDetails$!: Card;
  readmore_url: any;
  
  constructor(public router: Router) {}

  ngOnInit(): void { }

  ngAfterViewInit() { }
        
  ngOnChanges(changes: any) {
  	this.cardDetails$ = JSON.parse(changes.cardDetails.currentValue);
  	// console.log('cards', JSON.stringify(this.cardDetails$));
  	this.readmore_url = (this.cardDetails$.readmore_url != null) 
  		? 
  		(this.cardDetails$.readmore_url.substring(0, 4) == "{id}")
  			? this.cardDetails$.readmore_url.substring(4) + this.cardDetails$.id
  			: this.cardDetails$.readmore_url
  		: "#";
  }

  decode = (x: any) => decode(x);

  shortenTextToPreview = (x: any) => x.substring(0,190) + " ...";
}
