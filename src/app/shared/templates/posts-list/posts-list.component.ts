import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

@Component({
	selector: "app-posts-list",
	standalone: true,
	imports: [CommonModule, RouterModule],
	templateUrl: "./posts-list.component.html",
	styleUrl: "./posts-list.component.sass"
})
export class PostsListComponent implements OnInit {

	constructor() {}

	ngOnInit(): void { }
}