import { ComponentFixture, TestBed } from "@angular/core/testing";
import { BadgeBlockComponent } from "./badge-block.component";

describe("BadgeBlockComponent", () => {
	let component: BadgeBlockComponent;
	let fixture: ComponentFixture<BadgeBlockComponent>;

	beforeEach(async () => {
		const a = setup().default();
		await TestBed.configureTestingModule({
			imports: [BadgeBlockComponent]
		})
			.compileComponents();
    
		fixture = TestBed.createComponent(BadgeBlockComponent);
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
            return new BadgeBlockComponent();
        }
    }
    return builder;
}