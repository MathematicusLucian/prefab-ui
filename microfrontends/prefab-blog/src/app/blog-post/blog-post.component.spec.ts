import { ComponentFixture, TestBed } from "@angular/core/testing";
import { BlogPostComponent } from "./blog-post.component";
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { FirebaseService } from '../../../../../prefab-components/services/firebase/firebase.service';
import { autoSpy } from '../../../../auto-spy';

describe("BlogPostComponent", () => {
	let component: BlogPostComponent;
	let fixture: ComponentFixture<BlogPostComponent>;

	beforeEach(async () => {
		const a = setup().default();
		await TestBed.configureTestingModule({
			imports: [BlogPostComponent]
		}).configureTestingModule({ providers: [{ provide: ActivatedRoute, useValue: a.route },
            { provide: FirebaseService, useValue: a.firebase }] })
			.compileComponents();
    
		fixture = TestBed.createComponent(BlogPostComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
    it('when ngOnInit is called it should', () => {
        // arrange
        const { build } = setup().default();
        const b = build();
        // act
        b.ngOnInit();
        // assert
        // expect(b).toEqual
    });
    it('when ngOnDestroy is called it should', () => {
        // arrange
        const { build } = setup().default();
        const b = build();
        // act
        b.ngOnDestroy();
        // assert
        // expect(b).toEqual
    });
});

function setup() {
    const route = autoSpy(ActivatedRoute);
    const firebase = autoSpy(FirebaseService);
    firebase.getItemById.and.returnValue(new Promise(res => {}));
    const builder = {
        route,
        firebase,
        default() {
            return builder;
        },
        build() {
            return new BlogPostComponent(route, firebase);
        },
        
    withRouteSnapshot(s: ActivatedRouteSnapshot) {
            route.snapshot = s;
            return builder;
        },withFirebaseGetItemByIdReturn(g: Promise<any>) {
            firebase.getItemById.and.returnValue(g);
            return builder;
        },}
    return builder;
}