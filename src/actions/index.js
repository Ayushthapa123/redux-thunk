export const addTodo=(data)=> {
    return {
        type:"ADD_TODO",
        payloads: {
            id:new Date().getTime().toString(),
            data:data

        }
    }
}

export const removeTodo=()=> {
    return {
        type:"REMOVE_TODO"
    }
}