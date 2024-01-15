import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { concatMap, switchMap, pipe, map } from "rxjs";
// import appConfig from "../config/app.config.json";
// import { SiteGraph } from "./site-graph.model";
import { SiteGraphService } from "../../core/services/site-graph/site-graph.service";
// import * as SiteGraphActions from "./actions";

@Injectable()
export class BooksEffects {

    constructor(private actions$: Actions,
        private siteGraphService: SiteGraphService) {}

//     loadBooks$ = createEffect(
//         () => this.actions$
//             .pipe(
//                 ofType(SiteGraphActions.getSiteGraph),
//                 concatMap(action =>
//                     this.siteGraphService.getSiteGraph()),
//                 map((siteGraph : SiteGraph[]) => SiteGraphActions.retrievedSiteGraph({siteGraph}))

//             )
//     );

    // loadItems$ = this.actions$.pipe(
    // ofType(loadItems),
    // switchMap(() =>
    //     this.siteGraphService.getSiteGraph().pipe(
    //         map(items => loadItemsSuccess({ items })),
    //         catchError(error => of(loadItemsFailure({ error })))
    //         )
    //     )
    // );

}
