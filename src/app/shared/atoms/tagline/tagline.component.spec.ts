import { ComponentFixture, TestBed } from "@angular/core/testing";
import { TaglineComponent } from "./tagline.component";
import { autoSpy } from './../../../../../auto-spy';

describe("TaglineComponent", () => {
	let component: TaglineComponent;
	let fixture: ComponentFixture<TaglineComponent>;

	beforeEach(async () => {
		const a = setup().default();
		await TestBed.configureTestingModule({
			imports: [TaglineComponent]
		})
			.compileComponents();
    
		fixture = TestBed.createComponent(TaglineComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
    it('when ngOnChanges is called it should', () => {
        // arrange
        const { build } = setup().default();
        const t = build();
        // act
        t.ngOnChanges();
        // assert
        // expect(t).toEqual
    });
});

function setup() {
    const builder = {
        default() {
            return builder;
        },
        build() {
            return new TaglineComponent();
        }
    }
    return builder;
}