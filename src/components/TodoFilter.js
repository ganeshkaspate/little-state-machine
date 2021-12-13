import { Label } from "@blueprintjs/core"
import { useStateMachine } from "little-state-machine"
import React from "react"
import { filterTodo, setFilterCritera } from '../actions/index'

export const TodoFilter = (props) => {

    const { actions, state } = useStateMachine({ filterTodo, setFilterCritera })

    const updateFilter = ({ target: { value } }) => {
        actions.setFilterCritera(value)
    };

    return (
        <div style={{ marginBottom: '10px' }}>
            <Label> Filter: </Label>
            <select value={state.filter} onChange={updateFilter}>
                <option value="Show All">All</option>
                <option value="Show Completed">Completed</option>
                <option value="Show Uncompleted">Uncompleted</option>
            </select>
        </div>
    )

}