import { TestBed } from '@angular/core/testing';

import { PrefabCommonUiService } from './prefab-common-ui.service';

describe('PrefabUiService', () => {
  let service: PrefabCommonUiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrefabCommonUiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
