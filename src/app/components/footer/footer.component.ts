import { Component } from '@angular/core';
import { FlexLayoutModule } from "@angular/flex-layout";
import { FlexLayoutServerModule } from '@angular/flex-layout/server';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [FlexLayoutModule, FlexLayoutServerModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.sass'
})
export class FooterComponent {

}
