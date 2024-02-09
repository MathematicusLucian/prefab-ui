import { ComponentFixture, TestBed } from "@angular/core/testing";
import { BioComponent } from "./bio.component";

describe("BioComponent", () => {
	let component: BioComponent;
	let fixture: ComponentFixture<BioComponent>;

	beforeEach(async () => {
		const a = setup().default();
		await TestBed.configureTestingModule({
			imports: [BioComponent]
		})
			.compileComponents();
    
		fixture = TestBed.createComponent(BioComponent);
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
            return new BioComponent();
        }
    }
    return builder;
}