import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ToggleButtonComponent } from "./toggle-button.component";

describe("ToggleButtonComponent", () => {
	let component: ToggleButtonComponent;
	let fixture: ComponentFixture<ToggleButtonComponent>;

	beforeEach(async () => {
		const a = setup().default();
		await TestBed.configureTestingModule({
			imports: [ToggleButtonComponent]
		})
			.compileComponents();
    
		fixture = TestBed.createComponent(ToggleButtonComponent);
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
    it('when toggle is called it should', () => {
        // arrange
        const { build } = setup().default();
        const t = build();
        // act
        t.toggle();
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
            return new ToggleButtonComponent();
        }
    }
    return builder;
}