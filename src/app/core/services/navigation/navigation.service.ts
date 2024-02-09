import { Injectable, OnDestroy } from "@angular/core";
import { Location } from "@angular/common";
import { Router, NavigationEnd } from "@angular/router";

@Injectable({
	providedIn: "root"
})
export class NavigationService implements OnDestroy {
	private history: string[] = [];

	constructor(private router: Router, private location: Location) { }

	ngOnDestroy(): void {
		// this.router.destroy();
	}

	public commenceHistoryStorage(): void {
		this.router.events.subscribe((event) => {
			if (event instanceof NavigationEnd) {
				this.history.push(event.urlAfterRedirects);
			}
		});
	}

	public getHistory = (): string[] => this.history;

	public stepBack(): void {
		this.history.pop();
		(this.history.length > 0) ? this.location.back() : this.router.navigateByUrl("/");
	}

	public getPreviousUrl = (): string => (this.history.length > 0) ? this.history[this.history.length - 2] : "";
}