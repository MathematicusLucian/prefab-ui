import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ResumeComponent } from "./resume.component";
import { SiteGraphService } from '../../../../prefab-blog/src/app/core/services/site-graph/site-graph.service';
import { autoSpy } from '../../../../auto-spy';
import { Observable, EMPTY } from "rxjs";

describe("ResumeComponent", () => {
	let component: ResumeComponent;
	let fixture: ComponentFixture<ResumeComponent>;

	beforeEach(async () => {
		const a = setup().default();
		await TestBed.configureTestingModule({
			imports: [ResumeComponent]
		}).configureTestingModule({ providers: [{ provide: SiteGraphService, useValue: a.siteGraphService }] })
			.compileComponents();
    
		fixture = TestBed.createComponent(ResumeComponent);
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
    it('when ngOnChanges is called it should', () => {
        // arrange
        const { build } = setup().default();
        const r = build();
        // act
        r.ngOnChanges({"test": "test"});
        // assert
        // expect(r).toEqual
    });
    it('when hasContent is called it should', () => {
        // arrange
        const { build } = setup().default();
        const r = build();
        // act
        r.hasContent("test");
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
            return new ResumeComponent(siteGraphService);
        },
        
    withSiteGraphServiceFetchBlocksReturn(f: Observable<any>) {
            siteGraphService.fetchBlocks.and.returnValue(f);
            return builder;
        },}
    return builder;
}