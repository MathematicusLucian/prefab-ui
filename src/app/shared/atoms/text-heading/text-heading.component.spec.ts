import { ComponentFixture, TestBed } from "@angular/core/testing";
import { HeadingComponent } from "./text-heading.component";
import { Router } from '@angular/router';
import { autoSpy } from './../../../../../auto-spy';

describe("HeadingComponent", () => {
	let component: HeadingComponent;
	let fixture: ComponentFixture<HeadingComponent>;

	beforeEach(async () => {
		const a = setup().default();
		await TestBed.configureTestingModule({
			imports: [HeadingComponent]
		}).configureTestingModule({ providers: [{ provide: Router, useValue: a.router }] })
			.compileComponents();
    
		fixture = TestBed.createComponent(HeadingComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
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
    it('when ngOnChanges is called it should', () => {
        // arrange
        const { build } = setup().default();
        const h = build();
        // act
        h.ngOnChanges({"test":"test"});
        // assert
        // expect(h).toEqual
    });
    it('when navigate is called it should', () => {
        // arrange
        const { build } = setup().default();
        const h = build();
        // act
        h.navigate();
        // assert
        // expect(h).toEqual
    });
});

function setup() {
    const router = autoSpy(Router);
    router.navigate.and.returnValue(new Promise(res => {}));
    const builder = {
        router,
        default() {
            return builder;
        },
        build() {
            return new HeadingComponent(router);
        },
        
    withRouterNavigateReturn(n: Promise<boolean>) {
            router.navigate.and.returnValue(n);
            return builder;
        },}
    return builder;
}