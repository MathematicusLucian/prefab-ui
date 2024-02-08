import { ComponentFixture, TestBed } from "@angular/core/testing";
import { CardblockComponent } from "./cardblock.component";

describe("CardblockComponent", () => {
	let component: CardblockComponent;
	let fixture: ComponentFixture<CardblockComponent>;

	beforeEach(async () => {
		const a = setup().default();
		await TestBed.configureTestingModule({
			imports: [CardblockComponent]
		})
			.compileComponents();
    
		fixture = TestBed.createComponent(CardblockComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
    it('when ngOnInit is called it should', () => {
        // arrange
        const { build } = setup().default();
        const c = build();
        // act
        c.ngOnInit();
        // assert
        // expect(c).toEqual
    });
    it('when ngAfterViewInit is called it should', () => {
        // arrange
        const { build } = setup().default();
        const c = build();
        // act
        c.ngAfterViewInit();
        // assert
        // expect(c).toEqual
    });
    it('when ngOnDestroy is called it should', () => {
        // arrange
        const { build } = setup().default();
        const c = build();
        // act
        c.ngOnDestroy();
        // assert
        // expect(c).toEqual
    });
});

function setup() {
    const builder = {
        default() {
            return builder;
        },
        build() {
            return new CardblockComponent();
        }
    }
    return builder;
}