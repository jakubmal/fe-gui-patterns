// Angular.js
///////////////////////////////////////////////////////////////////////////////

// Correct!

class CheckerComponent {
  constructor(SomethingService) {
    this.somethingService = SomethingService;
  }

  get somethingToPresent() {
    return this.somethingService.getSomething();
  }
}


// Antipattern!

class WrongCheckerComponent {
  constructor(SomethingService) {
    this.something = SomethingService.getSomething();
    // now if getSomething() changes, we won't know about it!
    // if getSomething() is expensive, do caching inside SomethingService
  }
}
