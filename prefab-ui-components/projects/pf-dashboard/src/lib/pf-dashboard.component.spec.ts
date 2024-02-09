import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrefabDashboardUiComponent } from './pf-dashboard.component';

describe('PrefabDashboardUiComponent', () => {
  let component: PrefabDashboardUiComponent;
  let fixture: ComponentFixture<PrefabDashboardUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrefabDashboardUiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrefabDashboardUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
