// Angular.js
///////////////////////////////////////////////////////////////////////////////

class CheckerComponent {
  constructor() {
    this.checked = false;
  }

  toggleChecked() {
    this.checked = !this.checked; // not a property - it's a field

    // $scope.$digest() is run implicitly here
    // if any observed field on this changes, template is refreshed 
  }
}

// template 

<div>
  {{ $ctrl.checked }}
  <a ng-click="$ctrl.toggleChecked()">Toggle</a>
</div>
