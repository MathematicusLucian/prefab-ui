import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProjectsComponent } from './projects.component';
import { SiteGraphService } from '../../core/services/site-graph/site-graph.service';
import { autoSpy } from './../../../../auto-spy';
import { Observable, EMPTY } from 'rxjs';

describe('ProjectsComponent', () => {
  let component: ProjectsComponent;
  let fixture: ComponentFixture<ProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
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

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

function setup() {
    const siteGraphService = autoSpy(SiteGraphService);
    siteGraphService.fetchBlocks.and.returnValue(EMPTY);
    siteGraphService.fetchAllBlocks.and.returnValue(EMPTY);
    const builder = {
        siteGraphService,
        default() {
            return builder;
        },
        build() {
            return new ProjectsComponent(siteGraphService);
        },
        
    withSiteGraphServiceFetchBlocksReturn(f: Observable<any>) {
            siteGraphService.fetchBlocks.and.returnValue(f);
            return builder;
        },
        withSiteGraphServiceFetchAllBlocksReturn(f: Observable<any>) {
            siteGraphService.fetchAllBlocks.and.returnValue(f);
            return builder;
        },}
    return builder;
}