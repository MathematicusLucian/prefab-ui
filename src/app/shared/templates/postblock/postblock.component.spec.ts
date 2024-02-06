import { ComponentFixture, TestBed } from "@angular/core/testing";

import { PostblockComponent } from "./postblock.component";

describe("PostblockComponent", () => {
	let component: PostblockComponent;
	let fixture: ComponentFixture<PostblockComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [PostblockComponent]
		})
			.compileComponents();
    
		fixture = TestBed.createComponent(PostblockComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
