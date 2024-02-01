import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.sass'
})
export class ButtonComponent {
  @Input() buttonText: any;
  @Input() buttonURL: any;
  @Input() postData: any;
  
  constructor(public router: Router) {}

  navigateWithState() {
    (this.buttonURL == "expand")
    ?
      this.router.navigateByUrl('/post', { state: { blog_data: this.postData } })
    :
      this.router.navigateByUrl(this.buttonURL);
  }
}
