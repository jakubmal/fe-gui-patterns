// React
///////////////////////////////////////////////////////////////////////////////

class Parent extends React.Component {
  render() {
    return (
      <div>
        Some stuff
        <ParentSomethingPresenter something={this.state.something}>
        </ParentSomethingPresenter>
      </div>
    );
  }
}

class ParentSomethingPresenter extends React.Component {
  render() {
    return (
      <div>
        Proudly presenting 
        Prop1 {this.props.something.prop1}
        Prop2 {this.props.something.prop2}
      </div>
    );
  }
}

// Antipattern!

class WrongParentSomethingPresenter extends React.Component {
  constructor() {
    this.state = {
      something: this.props.something,
    };
    // first: what is gained here?
    // second: if props (`something`) change, we will not be refreshed
  }

  render() {
    return (
      <div>
        Proudly presenting 
        Prop1 {this.state.something.prop1}
        Prop2 {this.state.something.prop2}
      </div>
    );
  }
}
