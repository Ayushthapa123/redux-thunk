const initialData={
    list : []
}

const todoReducers=(state=initialData,action)=> {
switch(action.type) {
    case "ADD_TODO":
        const {id,data}=action.payloads;

        return {
            ...state,
            list: [
                ...state.list,
                {
                id:id,
                data:data,
            }
            ]
        }

    default: return state;
}
}

export default todoReducers;