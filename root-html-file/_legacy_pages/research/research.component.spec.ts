import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ResearchComponent } from "./research.component";
import { SiteGraphService } from '../core/services/site-graph/site-graph.service';
import { autoSpy } from '../../../../auto-spy';
import { Observable, EMPTY } from "rxjs";

describe("ResearchComponent", () => {
	let component: ResearchComponent;
	let fixture: ComponentFixture<ResearchComponent>;

	beforeEach(async () => {
		const a = setup().default();
		await TestBed.configureTestingModule({
			imports: [ResearchComponent]
		}).configureTestingModule({ providers: [{ provide: SiteGraphService, useValue: a.siteGraphService }] })
			.compileComponents();
    
		fixture = TestBed.createComponent(ResearchComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
    it('when ngOnInit is called it should', () => {
        // arrange
        const { build } = setup().default();
        const r = build();
        // act
        r.ngOnInit();
        // assert
        // expect(r).toEqual
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
            return new ResearchComponent(siteGraphService);
        },
        
    withSiteGraphServiceFetchBlocksReturn(f: Observable<any>) {
            siteGraphService.fetchBlocks.and.returnValue(f);
            return builder;
        },}
    return builder;
}