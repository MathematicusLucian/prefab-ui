import { ComponentFixture, TestBed } from "@angular/core/testing";
import { AddContentComponent } from "./add-content.component";
import { SiteGraphService } from '../../core/services/site-graph/site-graph.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { autoSpy } from './../../../../auto-spy';

describe("AddContentComponent", () => {
	let component: AddContentComponent;
	let fixture: ComponentFixture<AddContentComponent>;

	beforeEach(async () => {
		const a = setup().default();
		await TestBed.configureTestingModule({
			imports: [AddContentComponent]
		}).configureTestingModule({ providers: [{ provide: SiteGraphService, useValue: a.siteGraphService },
            { provide: FormBuilder, useValue: a.formBuilder }] })
			.compileComponents();
    
		fixture = TestBed.createComponent(AddContentComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
    it('when addContent is called it should', () => {
        // arrange
        const { build } = setup().default();
        const a = build();
        // act
        a.addContent();
        // assert
        // expect(a).toEqual
    });
});

function setup() {
    const siteGraphService = autoSpy(SiteGraphService);
    siteGraphService.addBlockItemToFireBase.and.returnValue(new Promise(res => {}));
    const formBuilder = autoSpy(FormBuilder);
    const builder = {
        siteGraphService,
        formBuilder,
        default() {
            return builder;
        },
        build() {
            return new AddContentComponent(siteGraphService, formBuilder);
        },
        
    withSiteGraphServiceAddBlockItemToFireBaseReturn(a: Promise<void>) {
            siteGraphService.addBlockItemToFireBase.and.returnValue(a);
            return builder;
        },withFormBuilderGroupReturn(g: FormGroup<any>) {
            formBuilder.group.and.returnValue(g);
            return builder;
        },}
    return builder;
}