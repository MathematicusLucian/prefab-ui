import { ComponentFixture, TestBed } from "@angular/core/testing";

import { MenuItemComponent } from "./menu-item.component";

describe("MenuItemComponent", () => {
	let component: MenuItemComponent;
	let fixture: ComponentFixture<MenuItemComponent>;

	beforeEach(async () => {
		const a = setup().default();
		await TestBed.configureTestingModule({
			imports: [MenuItemComponent]
		})
			.compileComponents();
    
		fixture = TestBed.createComponent(MenuItemComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
    it('when ngOnChanges is called it should', () => {
        // arrange
        const { build } = setup().default();
        const m = build();
        // act
        m.ngOnChanges();
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
    it('when setColorScheme is called it should', () => {
        // arrange
        const { build } = setup().default();
        const m = build();
        // act
        m.setColorScheme();
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
            return new MenuItemComponent();
        }
    }
    return builder;
}