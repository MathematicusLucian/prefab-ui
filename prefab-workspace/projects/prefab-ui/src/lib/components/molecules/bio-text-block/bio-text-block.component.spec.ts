import { ComponentFixture, TestBed } from "@angular/core/testing";
import { BioTextBlockComponent } from "./bio-text-block.component";

describe("BioTextBlockComponent", () => {
	let component: BioTextBlockComponent;
	let fixture: ComponentFixture<BioTextBlockComponent>;

	beforeEach(async () => {
		const a = setup().default();
		await TestBed.configureTestingModule({
			imports: [BioTextBlockComponent]
		})
			.compileComponents();
    
		fixture = TestBed.createComponent(BioTextBlockComponent);
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
    const builder = {
        default() {
            return builder;
        },
        build() {
            return new BioTextBlockComponent();
        }
    }
    return builder;
}