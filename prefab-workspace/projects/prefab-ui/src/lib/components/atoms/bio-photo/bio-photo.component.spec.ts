import { ComponentFixture, TestBed } from "@angular/core/testing";
import { BioPhotoComponent } from "./bio-photo.component";
import { autoSpy } from '../../../../../auto-spy';

describe("BioPhotoComponent", () => {
	let component: BioPhotoComponent;
	let fixture: ComponentFixture<BioPhotoComponent>;

	beforeEach(async () => {
		const a = setup().default();
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

function setup() {
    const builder = {
        default() {
            return builder;
        },
        build() {
            return new BioPhotoComponent();
        }
    }
    return builder;
}