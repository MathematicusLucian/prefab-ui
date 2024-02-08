import { ComponentFixture, TestBed } from "@angular/core/testing";
import { MenuBlockComponent } from "./menu-block.component";
import { SimpleChanges } from "@angular/core";

describe("MenuBlockComponent", () => {
	let component: MenuBlockComponent;
	let fixture: ComponentFixture<MenuBlockComponent>;

	beforeEach(async () => {
		const a = setup().default();
		await TestBed.configureTestingModule({
			imports: [MenuBlockComponent]
		})
			.compileComponents();
    
		fixture = TestBed.createComponent(MenuBlockComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
    it('when ngOnInit is called it should', () => {
        // arrange
        const { build } = setup().default();
        const m = build();
        // act
        m.ngOnInit();
        // assert
        // expect(m).toEqual
    });
    it('when ngOnChanges is called it should', () => {
        // arrange
        const { build } = setup().default();
        const m = build();
        // act
        const sc: SimpleChanges = {};
        m.ngOnChanges(sc);
        // assert
        // expect(m).toEqual
    });
    it('when renderDynamicComponents is called it should', () => {
        // arrange
        const { build } = setup().default();
        const m = build();
        // act
        m.renderDynamicComponents();
        // assert
        // expect(m).toEqual
    });
    it('when ngAfterViewInit is called it should', () => {
        // arrange
        const { build } = setup().default();
        const m = build();
        // act
        m.ngAfterViewInit();
        // assert
        // expect(m).toEqual
    });
    it('when ngOnDestroy is called it should', () => {
        // arrange
        const { build } = setup().default();
        const m = build();
        // act
        m.ngOnDestroy();
        // assert
        // expect(m).toEqual
    });
});

function setup() {
    const builder = {
        default() {
            return builder;
        },
        build() {
            return new MenuBlockComponent();
        }
    }
    return builder;
}