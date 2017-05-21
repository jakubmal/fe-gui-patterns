// Angular.js
///////////////////////////////////////////////////////////////////////////////

class UserPresenter {
  // can be a getter on controller
  // can come from a separate static class with view helpers
  // can come from a decorator 
  get fullName() {
    return `${this.user.firstName} ${this.user.lastName}`;
  } 
}

// template 

<div>
  {{ $ctrl.fullName }}
</div>

// parent template
<UserPresenter user="..."></UserPresenter>
