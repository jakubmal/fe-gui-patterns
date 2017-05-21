// Angular.js
///////////////////////////////////////////////////////////////////////////////

// parent template
<SortedUserScorePresenter users="...">
</SortedUserScorePresenter>

// Antipattern!
class WrongSortedUserScorePresenter {
  get sortedUserScores() {
    return this.users.map(user => {return {user, score: getUserScore()}}).sortBy(pair => pair.score);
    // dirty checking will now be difficult
    // not only do we have an array, but also it's elements' references are changing
  }

  getUserScore(user) {
    return doMagicFormula(user);
  } 
}

// Better option 1
///////////////////////////////////////////////////////////////////////////////

class SortedUserScorePresenter1 {
  get sortedUsers() {
    return this.users.sortBy(user => getUserScore(user));
  }

  getUserScore(user) {
    return doMagicFormula(user);
  } 
}

// template
<li ng-repeat="user in $ctrl.sortedUsers">Score: {{ getUserScore(user) }}</li>

// Better option 2 if doMagicFormula is expensive
///////////////////////////////////////////////////////////////////////////////

class SortedUserScorePresenter2 {
  constructor($scope) {
    // will also be run first time users field is initiated
    $scope.$watch('users', (newUsers) => {
      this.sortedUserScores = sortedUserScores(newUsers);
    });
  }

  sortedUserScores(users) {
    return users.map(user => {return {user, score: getUserScore()}}).sortBy(pair => pair.score);
  }

  getUserScore(user) {
    return doMagicFormula(user);
  } 
}

// Corollary
///////////////////////////////////////////////////////////////////////////////

// Do not reorganize and compute derived items at the same time
// Do those steps separately
// Applies to list during dirty checking
