import { ComponentFixture, TestBed } from "@angular/core/testing";
import { PostsListComponent } from "./posts-list.component";

describe("PostsListComponent", () => {
	let component: PostsListComponent;
	let fixture: ComponentFixture<PostsListComponent>;

	beforeEach(async () => {
		const a = setup().default();
		await TestBed.configureTestingModule({
			imports: [PostsListComponent]
		})
			.compileComponents();
    
		fixture = TestBed.createComponent(PostsListComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
    it('when ngOnInit is called it should', () => {
        // arrange
        const { build } = setup().default();
        const p = build();
        // act
        p.ngOnInit();
        // assert
        // expect(p).toEqual
    });
});

function setup() {
    const builder = {
        default() {
            return builder;
        },
        build() {
            return new PostsListComponent();
        }
    }
    return builder;
}