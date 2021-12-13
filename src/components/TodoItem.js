import React from "react"
import { Button, Checkbox } from "@blueprintjs/core"
import { useStateMachine } from 'little-state-machine';
import { updateTodoList, removeTodoList, updateWithNewValueTodoListupdateTodoList  } from '../actions/index'


export const TodoItem = ({item}) => {

    const { actions, state } = useStateMachine({ removeTodoList, updateWithNewValueTodoListupdateTodoList });
    const index = state.todoList.findIndex((listItem) => listItem === item)

    const onRemoveClick = () => {
        actions.removeTodoList(index)
    }

     const toggleItemCompletion = () => {
        actions.updateWithNewValueTodoListupdateTodoList([{ ...item, isComplete: !item.isComplete, }, index])
     }

    const onChange = (event) => {
        actions.updateWithNewValueTodoListupdateTodoList([{ ...item, Text: event.target.value }, index])
    }

    return (
        <div style={{ marginTop: '25px', display:'flex', justifyContent:'center', alignItems:'center' }} >
             <input className="bp3-input .modifier" style={{marginRight: '10px'}}  value={item.Text} type="text" onChange={onChange} />
             <Checkbox style={{textAlign: 'center'}} checked={item.isComplete} onChange={toggleItemCompletion}/>
             <Button intent="primary" style={{width: '100px'}} onClick={onRemoveClick}>Remove</Button>
        </div>
    )
}