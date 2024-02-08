import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrefabUiComponent } from './prefab-ui.component';

describe('PrefabUiComponent', () => {
  let component: PrefabUiComponent;
  let fixture: ComponentFixture<PrefabUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrefabUiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrefabUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
