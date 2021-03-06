describe('Test Contact View', () => {
  let element;

  beforeEach(() => {
    angular.mock.module('app');
    angular.mock.inject(($compile, $rootScope) => {
      element = angular.element('<contact></contact>');
      element = $compile(element)($rootScope.$new());
      $rootScope.$digest();
    });
  });

  it('should create component', () => {
    expect(element).not.toBeNull();
  });
});
