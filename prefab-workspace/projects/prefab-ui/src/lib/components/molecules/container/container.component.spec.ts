import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ContainerComponent } from "./container.component";
import { ChangeDetectorRef, ChangeDetectionStrategy, ElementRef } from '@angular/core';

import { autoSpy } from '../../../../../auto-spy';

describe("ContainerComponent", () => {
	let component: ContainerComponent;
	let fixture: ComponentFixture<ContainerComponent>;

	beforeEach(async () => {
		const a = setup().default();
		await TestBed.configureTestingModule({
			imports: [ContainerComponent]
		}).configureTestingModule({ providers: [{ provide: ChangeDetectorRef }, //,useValue: a.ref
            { provide: ElementRef, useValue: a.element }] })
			.compileComponents();
    
		fixture = TestBed.createComponent(ContainerComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
    it('when renderDynamicComponents is called it should', () => {
        // arrange
        const { build } = setup().default();
        const c = build();
        // act
        c.renderDynamicComponents();
        // assert
        // expect(c).toEqual
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
        c.ngOnChanges();
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
    // const ref = autoSpy(ChangeDetectorRef);
    const element = autoSpy(ElementRef);
    const builder = {
        // ref,
        element,
        default() {
            return builder;
        },
        build() {
            return new ContainerComponent(element); //ref, 
        },
        
    withElementNativeElement(n: any) {
            element.nativeElement = n;
            return builder;
        },}
    return builder;
}