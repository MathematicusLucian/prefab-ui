import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaglineSmallComponent } from './tagline-small.component';

describe('TaglineSmallComponent', () => {
  let component: TaglineSmallComponent;
  let fixture: ComponentFixture<TaglineSmallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaglineSmallComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TaglineSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
