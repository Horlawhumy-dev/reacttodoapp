import React, { Component} from 'react';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import WithClass from './hoc/WithClass/WithClass'
import Main from './components/Main/Main'

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
        <Main />
        <Footer />
      </WithClass>
    )
  }
}

export default App;
