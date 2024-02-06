import { ComponentFixture, TestBed } from "@angular/core/testing";

import { BadgeBlockComponent } from "./badge-block.component";

describe("BadgeBlockComponent", () => {
	let component: BadgeBlockComponent;
	let fixture: ComponentFixture<BadgeBlockComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [BadgeBlockComponent]
		})
			.compileComponents();
    
		fixture = TestBed.createComponent(BadgeBlockComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
