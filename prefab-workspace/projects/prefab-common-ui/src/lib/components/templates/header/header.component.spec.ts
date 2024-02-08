import { ComponentFixture, TestBed } from "@angular/core/testing";
import { HeaderComponent } from "./header.component";
import { Router } from '@angular/router';
import { autoSpy } from "../../../../../auto-spy";

describe("HeaderComponent", () => {
	let component: HeaderComponent;
	let fixture: ComponentFixture<HeaderComponent>;

	beforeEach(async () => {
		const a = setup().default();
		await TestBed.configureTestingModule({
			imports: [HeaderComponent]
		}).configureTestingModule({ providers: [{ provide: Router, useValue: a.router }] })
			.compileComponents();
    
		fixture = TestBed.createComponent(HeaderComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
    it('when renderDynamicComponents is called it should', () => {
        // arrange
        const { build } = setup().default();
        const h = build();
        // act
        h.renderDynamicComponents();
        // assert
        // expect(h).toEqual
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
    it('when ngAfterViewInit is called it should', () => {
        // arrange
        const { build } = setup().default();
        const h = build();
        // act
        h.ngAfterViewInit();
        // assert
        // expect(h).toEqual
    });
    it('when ngOnDestroy is called it should', () => {
        // arrange
        const { build } = setup().default();
        const h = build();
        // act
        h.ngOnDestroy();
        // assert
        // expect(h).toEqual
    });
});

function setup() {
    const router = autoSpy(Router);
    const builder = {
        router,
        default() {
            return builder;
        },
        build() {
            return new HeaderComponent(router);
        },
        
    }
    return builder;
}