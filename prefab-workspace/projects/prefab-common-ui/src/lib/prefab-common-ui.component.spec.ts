import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrefabCommonUiComponent } from './prefab-common-ui.component';

describe('PrefabCommonUiComponent', () => {
  let component: PrefabCommonUiComponent;
  let fixture: ComponentFixture<PrefabCommonUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrefabCommonUiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrefabCommonUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
