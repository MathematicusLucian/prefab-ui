import { ComponentFixture, TestBed } from "@angular/core/testing";
import { TagsComponent } from "./tags.component";
import { SiteGraphService } from '../../core/services/site-graph/site-graph.service';
import { autoSpy } from './../../../../auto-spy';
import { Observable, EMPTY } from "rxjs";

describe("TagsComponent", () => {
	let component: TagsComponent;
	let fixture: ComponentFixture<TagsComponent>;

	beforeEach(async () => {
		const a = setup().default();
		await TestBed.configureTestingModule({
			imports: [TagsComponent]
		}).configureTestingModule({ providers: [{ provide: SiteGraphService, useValue: a.siteGraphService }] })
			.compileComponents();
    
		fixture = TestBed.createComponent(TagsComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
    it('when ngOnInit is called it should', () => {
        // arrange
        const { build } = setup().default();
        const t = build();
        // act
        t.ngOnInit();
        // assert
        // expect(t).toEqual
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
            return new TagsComponent(siteGraphService);
        },
        
    withSiteGraphServiceFetchBlocksReturn(f: Observable<any>) {
            siteGraphService.fetchBlocks.and.returnValue(f);
            return builder;
        },}
    return builder;
}