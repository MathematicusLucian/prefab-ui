import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { NavigationService } from './navigation.service';
import { Observable, ReplaySubject } from 'rxjs';
import { autoSpy } from './../../../../../auto-spy';

describe('NavigationService', () => {
  it('when commenceHistoryStorage is called it should', () => {
    // arrange
    const { build } = setup().default();
    const n = build();
    // act
    n.commenceHistoryStorage();
    // assert
    // expect(n).toEqual
  });

  it('when stepBack is called it should', () => {
    // arrange
    const { build } = setup().default();
    const n = build();
    // act
    n.stepBack();
    // assert
    // expect(n).toEqual
  });
  
});

function setup() {
  const routerEvents$ = new ReplaySubject<any>(1);
    // const router = autoSpy(Router, { events: routerEvents$ });
    const router = autoSpy(Router);
    router.navigateByUrl.and.returnValue(new Promise(res => {}));
    const location = autoSpy(Location);
    
  const builder = {
    router,
    location,
    withRouterEvents(e$: Observable<any>) {
        e$.subscribe({
            next: (v) => routerEvents$.next(v),
            error: (e) => routerEvents$.error(e),
            complete: () => routerEvents$.complete()
        });
        return builder;
    },
    withRouterNavigateByUrlReturn(n: Promise<boolean>) {
        router.navigateByUrl.and.returnValue(n);
        return builder;
    },
    default() {
      return builder;
    },
    build() {
      return new NavigationService(router,location);
    }
  };

  return builder;
}
