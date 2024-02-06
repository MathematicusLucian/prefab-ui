import { Component, OnInit } from "@angular/core";

import { RouterModule } from "@angular/router";

@Component({
	selector: "app-posts-list",
	standalone: true,
	imports: [RouterModule],
	templateUrl: "./posts-list.component.html",
	styleUrl: "./posts-list.component.sass"
})
export class PostsListComponent implements OnInit {

	constructor() {}

	ngOnInit(): void { }
}