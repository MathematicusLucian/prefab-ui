import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ButtonComponent } from "./button.component";
import { Router } from '@angular/router';
import { autoSpy } from '../../../../../auto-spy';

describe("ButtonComponent", () => {
	let component: ButtonComponent;
	let fixture: ComponentFixture<ButtonComponent>;

	beforeEach(async () => {
		const a = setup().default();
		await TestBed.configureTestingModule({
			imports: [ButtonComponent]
		}).configureTestingModule({ providers: [{ provide: Router, useValue: a.router }] }).configureTestingModule({ providers: [{ provide: Router, useValue: a.router }] })
			.compileComponents();
    
		fixture = TestBed.createComponent(ButtonComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
    it('when navigateWithState is called it should', () => {
        // arrange
        const { build } = setup().default();
        const b = build();
        // act
        b.navigateWithState();
        // assert
        // expect(b).toEqual
    });
});

function setup() {
    const router = autoSpy(Router);
    router.navigateByUrl.and.returnValue(new Promise(res => {}));
    const builder = {
        router,
        default() {
            return builder;
        },
        build() {
            return new ButtonComponent(router);
        },
        
    withRouterNavigateByUrlReturn(n: Promise<boolean>) {
            router.navigateByUrl.and.returnValue(n);
            return builder;
        },}
    return builder;
}