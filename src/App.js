import React, { Component} from 'react';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import WithClass from './hoc/WithClass/WithClass'
import Main from './components/Main/Main'
import TodoContainer from './components/Main/TodoContainer/TodoContainer';
import Todo from './components/Main/TodoContainer/Todo/Todo'

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      tasks: []
    }
  }
  
  componentWillMount = () =>{
    this.fetchTasks()
  }

  fetchTasks = () => {
    fetch('http://127.0.0.1:8000/api/task-list/')
      .then(response => response.json())
      .then(data => {
        this.setState({tasks: data})
      })
      .catch(err => console.log(err))
  }

  todoRemovedHandler = (id) => {
    this.state.tasks.map(task => {
      if(task.id === id){
        console.log('ID matches')
      }
    })
  }

  render() {
    return(
      <WithClass classes="App">
        <Header />
        <Main>
          <TodoContainer>
            {this.state.tasks.map(task => {
                return <Todo key={task.id} todo={task} removed={() => this.todoRemovedHandler(task.id)}/>
            })}
          </TodoContainer>
        </Main>
        <Footer />
      </WithClass>
    )
  }
}

export default App;
