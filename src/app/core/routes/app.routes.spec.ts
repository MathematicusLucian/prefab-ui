import { Route, ActivatedRouteSnapshot, CanActivate, CanLoad, UrlSegment } from "@angular/router";
import { IsAdminGuard } from './app.routes';

describe('IsAdminGuard', () => {
  it('when canActivate is called it should', () => {
    // arrange
    const { build } = setup().default();
    const i = build();
    // act
    const route: ActivatedRouteSnapshot = new ActivatedRouteSnapshot;
    i.canActivate(route);
    // assert
    // expect(i).toEqual
  });
  
});

function setup() {
  
  const builder = {
    
    default() {
      return builder;
    },
    build() {
      return new IsAdminGuard();
    }
  };

  return builder;
}
