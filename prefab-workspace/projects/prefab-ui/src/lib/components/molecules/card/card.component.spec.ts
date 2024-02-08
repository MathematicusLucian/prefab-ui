import { ComponentFixture, TestBed } from "@angular/core/testing";
import { CardComponent } from "./card.component";
import { Router } from '@angular/router';
import { autoSpy } from '../../../../../auto-spy';

describe("CardComponent", () => {
	let component: CardComponent;
	let fixture: ComponentFixture<CardComponent>;

	beforeEach(async () => {
		const a = setup().default();
		await TestBed.configureTestingModule({
			imports: [CardComponent]
		}).configureTestingModule({ providers: [{ provide: Router, useValue: a.router }] })
			.compileComponents();
    
		fixture = TestBed.createComponent(CardComponent);
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
    it('when ngOnChanges is called it should', () => {
        // arrange
        const { build } = setup().default();
        const c = build();
        // act
        c.ngOnChanges({"test":"test"});
        // assert
        // expect(c).toEqual
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
            return new CardComponent(router);
        },
        
    }
    return builder;
}