import { ComponentFixture, TestBed } from "@angular/core/testing";
import { TaglineSmallComponent } from "./tagline-small.component";

describe("TaglineSmallComponent", () => {
	let component: TaglineSmallComponent;
	let fixture: ComponentFixture<TaglineSmallComponent>;

	beforeEach(async () => {
		const a = setup().default();
		await TestBed.configureTestingModule({
			imports: [TaglineSmallComponent]
		})
			.compileComponents();
    
		fixture = TestBed.createComponent(TaglineSmallComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});

function setup() {
    const builder = {
        default() {
            return builder;
        },
        build() {
            return new TaglineSmallComponent();
        }
    }
    return builder;
}