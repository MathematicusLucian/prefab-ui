import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable, of } from "rxjs";


@Injectable({
	providedIn: "root"
})
export class ResolverService implements Resolve<any> {
	resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
		// fetch siteGraph
		// https://angular.io/guide/lazy-loading-ngmodules
		return of({});
	}
}