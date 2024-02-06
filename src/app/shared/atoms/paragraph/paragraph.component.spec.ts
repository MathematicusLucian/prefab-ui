import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ParagraphComponent } from "./paragraph.component";
import { autoSpy } from './../../../../../auto-spy';

describe("ParagraphComponent", () => {
	let component: ParagraphComponent;
	let fixture: ComponentFixture<ParagraphComponent>;

	beforeEach(async () => {
		const a = setup().default();
		await TestBed.configureTestingModule({
			imports: [ParagraphComponent]
		})
			.compileComponents();
    
		fixture = TestBed.createComponent(ParagraphComponent);
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
            return new ParagraphComponent();
        }
    }
    return builder;
}