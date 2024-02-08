import { ComponentFixture, TestBed } from "@angular/core/testing";
import { HeadingBlockComponent } from "./heading-block.component";

describe("HeadingBlockComponent", () => {
	let component: HeadingBlockComponent;
	let fixture: ComponentFixture<HeadingBlockComponent>;

	beforeEach(async () => {
		const a = setup().default();
		await TestBed.configureTestingModule({
			imports: [HeadingBlockComponent]
		})
			.compileComponents();
    
		fixture = TestBed.createComponent(HeadingBlockComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
    it('when ngOnInit is called it should', () => {
        // arrange
        const { build } = setup().default();
        const h = build();
        // act
        h.ngOnInit();
        // assert
        // expect(h).toEqual
    });
});

function setup() {
    const builder = {
        default() {
            return builder;
        },
        build() {
            return new HeadingBlockComponent();
        }
    }
    return builder;
}