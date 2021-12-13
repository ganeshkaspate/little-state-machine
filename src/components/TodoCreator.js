import { Button, Label } from "@blueprintjs/core"
import { useState } from "react"
import { useStateMachine } from 'little-state-machine';
import { updateTodoList  } from '../actions/index'

export const TodoCreator = () => {

    const {actions, state }  = useStateMachine({ updateTodoList })
    const [inputValue, setInputValue] = useState('');

    const onChange = (event) => {
        setInputValue(event.target.value)
    }

    
    let id = 0;
    const getId = () => {
        return id++
    }


    const addTodo = () => {
        actions.updateTodoList({ id: getId(), Text: inputValue, isComplete: false })
        setInputValue('');
    };


    return (
        <div>
            <input style={{ marginRight: '10px' }} className="bp3-input .modifier" value={inputValue} type="text" placeholder="Text input" dir="auto" onChange={onChange} />
            <Button intent="primary" style={{ width: '100px' }} onClick={addTodo}>Add</Button>
        </div>
    )
}