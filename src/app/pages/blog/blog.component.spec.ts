import { ComponentFixture, TestBed } from "@angular/core/testing";
import { BlogComponent } from "./blog.component";
import { SiteGraphService } from '../../core/services/site-graph/site-graph.service';
import { autoSpy } from './../../../../auto-spy';
import { Observable, EMPTY } from "rxjs";

describe("BlogComponent", () => {
	let component: BlogComponent;
	let fixture: ComponentFixture<BlogComponent>;

	beforeEach(async () => {
		const a = setup().default();
		await TestBed.configureTestingModule({
			imports: [BlogComponent]
		}).configureTestingModule({ providers: [{ provide: SiteGraphService, useValue: a.siteGraphService }] })
			.compileComponents();
    
		fixture = TestBed.createComponent(BlogComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
    it('when ngOnInit is called it should', () => {
        // arrange
        const { build } = setup().default();
        const b = build();
        // act
        b.ngOnInit();
        // assert
        // expect(b).toEqual
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
            return new BlogComponent(siteGraphService);
        },
        
    withSiteGraphServiceFetchBlocksReturn(f: Observable<any>) {
            siteGraphService.fetchBlocks.and.returnValue(f);
            return builder;
        },}
    return builder;
}