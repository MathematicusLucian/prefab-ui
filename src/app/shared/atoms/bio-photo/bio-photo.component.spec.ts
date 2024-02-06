import { ComponentFixture, TestBed } from "@angular/core/testing";

import { BioPhotoComponent } from "./bio-photo.component";

describe("BioPhotoComponent", () => {
	let component: BioPhotoComponent;
	let fixture: ComponentFixture<BioPhotoComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [BioPhotoComponent]
		})
			.compileComponents();
    
		fixture = TestBed.createComponent(BioPhotoComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
