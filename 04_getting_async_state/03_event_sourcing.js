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
    broadcast('FooService-loading');

    // but status is still needed, because someone can start listening
    // after we broadcaster current status
    this.status = 'loading';
    
    $http.get('/Foo').then(
      (fooData) => { 
        this.foo = process(fooData); 
        this.status = 'ready';
        broadcast('FooService-ready');
      },
      () => {
        this.status = 'error';
        broadcast('FooService-error');
      },
    );
  }

  addEventListener(handler) { }
  removeEventListener(handler) { }
  broadcast(eventName, data) { }
}

// Component

class CheckerComponent {
  constructor(FooService, $scope) {
    this.fooService = FooService;

    this.fooStatus = this.fooService.status;
    this.foo = this.fooService.foo;

    this.fooService.addEventListener(this.handleFooEvent.bind(this));
  }

  handleFooEvent(eventName, data) {
    switch (eventName) {
      case 'FooService-loading':
        this.fooStatus = 'loading';
        break;
      case 'FooService-ready':
        this.fooStatus = 'ready';
        this.foo = data;
        break;
      case 'FooService-error':
        this.fooStatus = 'error';
        break;
    }
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

// Also!
// This is exactly the same as observable / generator-based approaches.
