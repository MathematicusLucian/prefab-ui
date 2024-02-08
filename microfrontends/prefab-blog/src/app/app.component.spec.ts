// import { TestBed } from "@angular/core/testing";
// import { AppComponent } from "./app.component";
// import { APIService } from '../../../../prefab-components/services/api/api.service';
// import { Location } from '@angular/common';
// import { NavigationService } from './core/services/navigation/navigation.service';
// import { SiteGraphService } from './core/services/site-graph/site-graph.service';
// import { Store } from '@ngrx/store';
// import { Router } from '@angular/router';
// import { autoSpy } from "./../../tests/auto-spy";
// import { Observable, EMPTY } from "rxjs";

// describe("AppComponent", () => {
// 	beforeEach(async () => {
// 		const a = setup().default();
// 		await TestBed.configureTestingModule({
// 			imports: [AppComponent],
// 		}).configureTestingModule({ providers: [{ provide: APIService, useValue: a.apiService },
//             { provide: Location, useValue: a.location },
//             { provide: NavigationService, useValue: a.navigationService },
//             { provide: SiteGraphService, useValue: a.siteGraphService },
//             { provide: Store, useValue: a.store },
//             { provide: Router, useValue: a.router }] }).configureTestingModule({ providers: [{ provide: APIService, useValue: a.apiService },
//             { provide: Location, useValue: a.location },
//             { provide: NavigationService, useValue: a.navigationService },
//             { provide: SiteGraphService, useValue: a.siteGraphService },
//             { provide: Store, useValue: a.store },
//             { provide: Router, useValue: a.router }] }).compileComponents();
// 	});

// 	it("should create the app", () => {
// 		const fixture = TestBed.createComponent(AppComponent);
// 		const app = fixture.componentInstance;
// 		expect(app).toBeTruthy();
// 	});

// 	it("should have the 'personal-porfolio' title", () => {
// 		const fixture = TestBed.createComponent(AppComponent);
// 		const app = fixture.componentInstance;
// 		expect(app.title).toEqual("personal-porfolio");
// 	});

// 	it("should render title", () => {
// 		const fixture = TestBed.createComponent(AppComponent);
// 		fixture.detectChanges();
// 		const compiled = fixture.nativeElement as HTMLElement;
// 		expect(compiled.querySelector("h1")?.textContent).toContain("Hello, personal-porfolio");
// 	});
    
//     it('when ngOnInit is called it should', () => {
//         // arrange
//         const { build } = setup().default();
//         const a = build();
//         // act
//         a.ngOnInit();
//         // assert
//         // expect(a).toEqual
//     });
// });

// function setup() {
//     const apiService = autoSpy(APIService);
//     const location = autoSpy(Location);
//     const navigationService = autoSpy(NavigationService);
//     const siteGraphService = autoSpy(SiteGraphService);
//     siteGraphService.fetchBlocks.and.returnValue(EMPTY);
//     const store = autoSpy(Store);
//     const router = autoSpy(Router);
//     const builder = {
//         apiService,
//         location,
//         navigationService,
//         siteGraphService,
//         store,
//         router,
//         default() {
//             return builder;
//         },
//         build() {
//             return new AppComponent(apiService, location, navigationService, siteGraphService, store, router);
//         },
//         withSiteGraphServiceFetchBlocksReturn(f: Observable<any>) {
//             siteGraphService.fetchBlocks.and.returnValue(f);
//             return builder;
//         },
//     }
//     return builder;
// }