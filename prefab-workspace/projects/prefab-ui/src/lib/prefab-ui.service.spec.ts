import { TestBed } from '@angular/core/testing';

import { PrefabUiService } from './prefab-ui.service';

describe('PrefabUiService', () => {
  let service: PrefabUiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrefabUiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
