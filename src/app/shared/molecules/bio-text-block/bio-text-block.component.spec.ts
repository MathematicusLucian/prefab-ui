import { ComponentFixture, TestBed } from "@angular/core/testing";

import { BioTextBlockComponent } from "./bio-text-block.component";

describe("BioTextBlockComponent", () => {
	let component: BioTextBlockComponent;
	let fixture: ComponentFixture<BioTextBlockComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [BioTextBlockComponent]
		})
			.compileComponents();
    
		fixture = TestBed.createComponent(BioTextBlockComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
