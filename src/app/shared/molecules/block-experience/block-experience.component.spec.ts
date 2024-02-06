import { ComponentFixture, TestBed } from "@angular/core/testing";
import { BlockExperienceComponent } from "./block-experience.component";

describe("BlockExperienceComponent", () => {
	let component: BlockExperienceComponent;
	let fixture: ComponentFixture<BlockExperienceComponent>;

	beforeEach(async () => {
		const a = setup().default();
		await TestBed.configureTestingModule({
			imports: [BlockExperienceComponent]
		})
			.compileComponents();
    
		fixture = TestBed.createComponent(BlockExperienceComponent);
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
            return new BlockExperienceComponent();
        }
    }
    return builder;
}