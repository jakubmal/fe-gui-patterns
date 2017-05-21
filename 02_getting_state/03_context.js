// React
///////////////////////////////////////////////////////////////////////////////

class HomeButton extends React.Component {
  redirectToHome() {
    this.context.router.redirectToHome();
  }

  render() {
    return (
      <button onClick={this.redirectToHome.bind(this)}>
        Home
      </button>
    );
  }
}

class SomeView extends React.Component {
  render() {
    return (
      <div>
        Some stuff...
        <HomeButton></HomeButton>
      </div>
    );
  }
}


// template
<Router>
  <View when="home">...</View>
  <View when="some">
    <SomeView></SomeView>
  </View>
</Router>

// Antipattern!
// Same as with DI and data binding, do not cache models, of which we are not the owner!
