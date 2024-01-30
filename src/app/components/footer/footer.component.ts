import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { FlexLayoutModule } from "@angular/flex-layout";
import { FlexLayoutServerModule } from '@angular/flex-layout/server';
import { Observable } from 'rxjs';
import { encode, decode } from 'html-entities';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, FlexLayoutModule, FlexLayoutServerModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.sass'
})
export class FooterComponent implements OnInit, OnChanges {
  @Input() footerData$!: Observable<any[]>; 
  copyrightHolder: any = ""; 
  footerLine: any = "";
  currentYear: number = new Date().getFullYear();

  ngOnInit() { 
  }
  
  ngOnChanges(changes: any) {
    console.log('testing changes', changes);
    this.footerData$.subscribe((x: any) => {
      if(x.length>0) console.log('testing footer ', x[0].copyrightHolder);
      if(x.length>0 && x[0].copyrightHolder) this.copyrightHolder = x[0].copyrightHolder;
      if(x.length>0 && x[0].footerLine) this.footerLine = decode(x[0].footerLine);
    })
  }
}