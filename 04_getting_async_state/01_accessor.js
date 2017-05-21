// Angular.js
///////////////////////////////////////////////////////////////////////////////

// Provider

class FooService {
  constructor($http) {
    this.$http = $http;

    // first time we're injected immediately start loading our data
    this.refresh();
  }

  refresh() {
    this.status = 'loading';
    this.$http.get('/Foo').then(
      (fooData) => { 
        this.foo = process(fooData); 
        this.status = 'ready';
      },
      () => {
        this.status = 'error';
      },
    );
  }
}

// Component

class CheckerComponent {
  constructor(FooService) {
    this.fooService = FooService;
  }

  get prop1() {
    return this.fooService.foo.prop1;
  }

  get fooStatus() {
    return this.fooService.status;
  }
}

// Template

<div>
  <div ng-if="$ctrl.fooStatus == 'loading'">...</div>
  <div ng-if="$ctrl.fooStatus == 'ready'">Prop 1 {{ $ctrl.prop1 }}</div>
  <div ng-if="$ctrl.fooStatus == 'error'">...</div>
</div>

// Notice!
// If `Foo` is refreshed, we don't need to do anything!

// Notice!
// This is how Redux's Store works.
