import React, { Component} from 'react';
import Header from './components/Header/Header'
import WithClass from './hoc/WithClass/WithClass'


class App extends Component{
  constructor(props){
    super(props);
    this.state = {

    }
  }

  render() {
    return(
      <WithClass classes="App">
        <Header />
      </WithClass>
    )
  }
}

export default App;
