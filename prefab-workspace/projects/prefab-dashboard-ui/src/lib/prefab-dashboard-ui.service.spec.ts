import { TestBed } from '@angular/core/testing';

import { PrefabDashboardUiService } from './prefab-dashboard-ui.service';

describe('PrefabDashboardUiService', () => {
  let service: PrefabDashboardUiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrefabDashboardUiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
