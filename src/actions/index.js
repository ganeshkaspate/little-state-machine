export const updateTodoList = (state, payload) => {
    return {
        ...state,
        todoList: [
            ...state.todoList,
            payload
        ]
    };
};

export const removeTodoList = (state, payload) => {
    return {
        ...state,
        todoList: [
            ...state.todoList.slice(0, payload),
            ...state.todoList.slice(payload + 1)
        ]
    }
}

export const updateWithNewValueTodoListupdateTodoList = ( state, payload ) => {
    return {
        ...state,
        todoList: [
            ...state.todoList.slice(0, payload[1]), 
            payload[0], 
            ...state.todoList.slice(payload[1] + 1)
        ]
    }
}

export const filterTodo = (state, payload ) => {
    console.log(payload === 'Show Uncompleted')
    switch (payload) {
        case 'Show Completed':{
            return {
                ...state,
                todoList: [
                    ...state.todoList.filter((item) => item.isComplete)
                ]
            }
        }
        case 'Show Uncompleted': {
            return {
                ...state,
                todoList: [
                    ...state.todoList.filter((item) => !item.isComplete)
                ]
            }
        }
        default:
          return state.toDoList;
      }
}

export const setFilterCritera = (state, payload) => {
    return {
        ...state,
        filter: payload
    }
}




