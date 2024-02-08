import { ComponentFixture, TestBed } from "@angular/core/testing";
import { BadgeComponent } from "./badge.component";
import { autoSpy } from '../../../../../auto-spy';

describe("BadgeComponent", () => {
	let component: BadgeComponent;
	let fixture: ComponentFixture<BadgeComponent>;

	beforeEach(async () => {
		const a = setup().default();
		await TestBed.configureTestingModule({
			imports: [BadgeComponent]
		})
			.compileComponents();
    
		fixture = TestBed.createComponent(BadgeComponent);
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
    it('when ngOnChanges is called it should', () => {
        // arrange
        const { build } = setup().default();
        const b = build();
        // act
        b.ngOnChanges({"test": "test"});
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
            return new BadgeComponent();
        }
    }
    return builder;
}