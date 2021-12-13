import logo from './logo.svg';
import './App.css';
import { useStateMachine } from 'little-state-machine';
import  { TodoCreator } from '../src/components/TodoCreator'
import { TodoItem } from './components/TodoItem'
import { filterTodo, setFilterCritera } from '../src/actions/index'
import { TodoFilter } from './components/TodoFilter';
import { useEffect } from 'react';

function App() {

  const {actions, state }  = useStateMachine({ updateName, filterTodo, setFilterCritera,filterTodo })


  return (
    <div className="App">
        <input type="text"  className="bp3-input .modifier" placeholder="Text input" dir="auto" style={{marginBottom: '20px', marginTop:'20px'}}  value={state.yourDetail.name}  onChange={(event) =>  event.target.value ?  actions.updateName({ name: event.target.value }) : null} />
        <TodoFilter />
        <TodoCreator />
        {
          state.todoList.length > 0  && state.todoList.map((todoItem) => (
            <TodoItem item={todoItem} key={todoItem.id}></TodoItem>
          ))
        }
    </div>
  );
}


function updateName(state, payload) {
  // state is global state.
  // payload - is the data 
  return {
    ...state,
    yourDetail: {
      ...state.yourDetail,   
      ...payload
    }
  }
}




export default App;
