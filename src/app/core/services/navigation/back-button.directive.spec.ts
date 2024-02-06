import { NavigationService } from './navigation.service';
import { BackButtonDirective } from './back-button.directive';
import { autoSpy } from './../../../../../auto-spy';

describe('BackButtonDirective', () => {
  
  it('it should construct', () => {
    // arrange
    const { build } = setup().default();
    // act
    const b = build();
    // assert
    // expect(b).toEqual
  });
  
});

function setup() {
  const navigationService = autoSpy(NavigationService);
    
  const builder = {
    navigationService,
    
    default() {
      return builder;
    },
    build() {
      return new BackButtonDirective(navigationService);
    }
  };

  return builder;
}
