import React, { Component } from 'react';

// new context
const MyContext = React.createContext();

// provider
class MyProvider extends Component {
  state = {
    age: 100
  }

  growYearOlder = () => {
    this.setState(prevState => ({ age: prevState.age + 1 }));
  }

  render() {
    return(
      <MyContext.Provider value={{
        state: this.state,
        growYearOlder: this.growYearOlder
      }}>
        {this.props.children}
      </MyContext.Provider>
    );
  }
}


const Family = (props) => (
  <div className="family">
    <Person />
  </div>
);

class Person extends Component {
  render() {
    return (
      <div className="person">
        <MyContext.Consumer>
          {(context) => (
            <React.Fragment>
              <p>I'm {context.state.age}</p>
              <button type="button" onClick={context.growYearOlder}>Grow</button>
            </React.Fragment>
          )}
        </MyContext.Consumer>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <MyProvider>
        <div>
          <p>I'm the app</p>
          <Family />
        </div>
      </MyProvider>
    );
  }
}

export default App;
