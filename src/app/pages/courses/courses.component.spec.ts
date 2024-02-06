import { ComponentFixture, TestBed } from "@angular/core/testing";
import { CoursesComponent } from "./courses.component";
import { SiteGraphService } from '../../core/services/site-graph/site-graph.service';
import { autoSpy } from './../../../../auto-spy';
import { Observable, EMPTY } from "rxjs";

describe("CoursesComponent", () => {
	let component: CoursesComponent;
	let fixture: ComponentFixture<CoursesComponent>;

	beforeEach(async () => {
		const a = setup().default();
		await TestBed.configureTestingModule({
			imports: [CoursesComponent]
		}).configureTestingModule({ providers: [{ provide: SiteGraphService, useValue: a.siteGraphService }] })
			.compileComponents();
    
		fixture = TestBed.createComponent(CoursesComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
    it('when ngOnInit is called it should', () => {
        // arrange
        const { build } = setup().default();
        const c = build();
        // act
        c.ngOnInit();
        // assert
        // expect(c).toEqual
    });
});

function setup() {
    const siteGraphService = autoSpy(SiteGraphService);
    siteGraphService.fetchBlocks.and.returnValue(EMPTY);
    const builder = {
        siteGraphService,
        default() {
            return builder;
        },
        build() {
            return new CoursesComponent(siteGraphService);
        },
        
    withSiteGraphServiceFetchBlocksReturn(f: Observable<any>) {
            siteGraphService.fetchBlocks.and.returnValue(f);
            return builder;
        },}
    return builder;
}