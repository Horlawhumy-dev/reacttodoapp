import React, { Component} from 'react';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import WithClass from './hoc/WithClass/WithClass'
import Main from './components/Main/Main'
import TodoContainer from './components/Main/TodoContainer/TodoContainer';
import Todo from './components/Main/TodoContainer/Todo/Todo'
import TodoForm from './components/Main/TodoContainer/TodoForm/TodoForm'
import TodoListing from './components/Main/TodoContainer/TodoListing/TodoListing'
import Wrap from './hoc/Wrap/Wrap'

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      tasks: [],
      activeItem: {
        id:null,
        title:'',
        completed:false
      },
      editing:false
    }
  }
  // geting csrftoken in javascript method
  getCookie = (name) => {
    var cookieValue = null;
    if(document.cookie && document.cookie !== ''){
      var cookies = document.cookie.split(';');
      for(var i=0; i < cookies.length; i++){
        var cookie = cookies[i].trim();
        // Does this cookie string start with the name we want
        if(cookie.substring(0, name.length + 1) === (name + '=')){
          cookieValue = decodeURIComponent(cookie.substring(name.length + 1))
          break
        }
      }
    }
    return cookieValue;
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
    
  handleChange = (e) =>{
    const val = e.target.value;
    this.setState({
      activeItem: {
        ...this.state.activeItem,
        title: val
      }
    })
  }

  
  todoEditedHandler = (task) => {
    this.setState({
      activeItem: task,
      editing: true
    })
  }

  todoSubmitHandler = (e) => {
    e.preventDefault()
    var csrftoken = this.getCookie('csrftoken');

    var url = 'http://127.0.0.1:8000/api/task-create/';

    if(this.state.editing === true){
      url = `http://127.0.0.1:8000/api/task-update/${ this.state.activeItem.id}`;
      this.setState({
        editing:false
      })
    }
    fetch(url, {
      method: "POST",
      headers: {
        'Content-type': 'application/json',
        'X-CSRFToken': csrftoken
      },
      body: JSON.stringify(this.state.activeItem)
    }).then(response => {
      this.fetchTasks()
      this.setState({
        activeItem: {
          id:null,
          title: '',
          completed: false
        }
      })
      }).catch(err => {
      console.log("Error: " ,err);
    })

}

  todoRemovedHandler = (task) => {
    var csrftoken = this.getCookie('csrftoken');
    const url = `http://127.0.0.1:8000/api/task-delete/${ task.id}`
    fetch(url, {
      method: "DELETE",
      headers: {
        'Content-type': 'application/json',
        'X-CSRFToken': csrftoken
      }
    }).then(() => {
      this.fetchTasks()
    }).catch(err => {
      console.log("Error: " ,err);
    })
  }

  render() {
    var self = this;
    return(
      <WithClass classes="App">
        <Header />
        <Main>
          <TodoContainer>
            <TodoForm 
            value={this.state.activeItem.title} 
            formSubmitted={this.todoSubmitHandler} 
            change={this.handleChange}/>
            <Wrap>
                <h3>Added Tasks</h3>
            </Wrap>
            <TodoListing>
                {this.state.tasks.map(task => {
                  return (
                    <Todo 
                    key={task.id} 
                    todo={task.title} 
                    removed={() => self.todoRemovedHandler(task)}
                    edited={() => self.todoEditedHandler(task)}
                    />
                  )
              })}
            </TodoListing>
            
          </TodoContainer>
        </Main>
        <Footer />
      </WithClass>
    )
  }
}

export default App;
