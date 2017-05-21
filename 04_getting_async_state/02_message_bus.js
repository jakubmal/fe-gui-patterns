// Angular.js
///////////////////////////////////////////////////////////////////////////////

// Provider

class FooService {
  constructor($http, $rootScope) {
    this.$http = $http;
    this.$rootScope = $rootScope;

    // first time we're injected immediately start loading our data
    this.refresh();
  }

  refresh() {
    this.$rootScope.$broadcast('FooService-loading');

    // but status is still needed, because someone can start listening
    // after we broadcaster current status
    this.status = 'loading';
    
    $http.get('/Foo').then(
      (fooData) => { 
        this.foo = process(fooData); 
        this.status = 'ready';
        this.$rootScope.$broadcast('FooService-ready');
      },
      () => {
        this.status = 'error';
        this.$rootScope.$broadcast('FooService-error');
      },
    );
  }
}

// Component

class CheckerComponent {
  constructor(FooService, $scope) {
    this.fooService = FooService;

    this.fooStatus = this.fooService.status;
    this.foo = this.fooService.foo;

    $scope.$on('FooService-loading', () => { this.fooStatus = 'loading'; });
    $scope.$on('FooService-error', () => { this.fooStatus = 'error'; });
    
    $scope.$on('FooService-ready', (foo) => { 
      this.fooStatus = 'ready'; 
      this.foo = foo;
    });
  }

  get prop1() {
    return this.foo.prop1;
  }

  get fooStatus() {
    return this.fooStatus;
  }
}

// Consider!
// Compare this approach with accessor-based one.
