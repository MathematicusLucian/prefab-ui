import { Component, Input, OnInit } from '@angular/core';
import { BadgeComponent } from '../../atoms/badge/badge.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-badge-block',
  standalone: true,
  imports: [CommonModule, BadgeComponent],
  templateUrl: './badge-block.component.html',
  styleUrl: './badge-block.component.sass'
})
export class BadgeBlockComponent implements OnInit {
  @Input() badges!: any;

  ngOnInit() { }
}
