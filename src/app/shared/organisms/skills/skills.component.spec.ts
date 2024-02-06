import { ComponentFixture, TestBed } from "@angular/core/testing";
import { SkillsComponent } from "./skills.component";
import { ActivatedRoute } from '@angular/router';
import { autoSpy } from './../../../../../auto-spy';

describe("SkillsComponent", () => {
	let component: SkillsComponent;
	let fixture: ComponentFixture<SkillsComponent>;

	beforeEach(async () => {
		const a = setup().default();
		await TestBed.configureTestingModule({
			imports: [SkillsComponent]
		}).configureTestingModule({ providers: [{ provide: ActivatedRoute, useValue: a.route }] })
			.compileComponents();
    
		fixture = TestBed.createComponent(SkillsComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
    it('when ngOnInit is called it should', () => {
        // arrange
        const { build } = setup().default();
        const s = build();
        // act
        s.ngOnInit();
        // assert
        // expect(s).toEqual
    });
    it('when ngAfterViewInit is called it should', () => {
        // arrange
        const { build } = setup().default();
        const s = build();
        // act
        s.ngAfterViewInit();
        // assert
        // expect(s).toEqual
    });
    it('when ngOnChanges is called it should', () => {
        // arrange
        const { build } = setup().default();
        const s = build();
        // act
        s.ngOnChanges();
        // assert
        // expect(s).toEqual
    });
    it('when ngOnDestroy is called it should', () => {
        // arrange
        const { build } = setup().default();
        const s = build();
        // act
        s.ngOnDestroy();
        // assert
        // expect(s).toEqual
    });
});

function setup() {
    const route = autoSpy(ActivatedRoute);
    const builder = {
        route,
        default() {
            return builder;
        },
        build() {
            return new SkillsComponent(route);
        },
        
    }
    return builder;
}