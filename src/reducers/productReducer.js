const initialState={
    products:[],
};

export const productReducer=(state=initialState,action)=> {
    switch (action.type) {

        case "FETCH_PRODUCTS":

        const {data}=action.payload;
            return {
                ...state,
                products:data,
            }

        default:
            return state;    
    }
}