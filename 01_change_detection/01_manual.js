// React
///////////////////////////////////////////////////////////////////////////////

class Board extends React.Component {
  constructor() {
    super();
    this.state = {
      checked: true,
    };
  }

  toggleCheck() {
      // manually signal changes
      this.setState({
          checked: !this.state.checked,
      });
  }

  render() {
    return (
        <div>
            {this.state.checked ? 'Checked' : 'Unchecked'}
            <a onClick={this.toggleCheck.bind(this)}>Toggle</a>
        </div>
    );
  }
}
