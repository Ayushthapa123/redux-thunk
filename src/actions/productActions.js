
import fakeStoreApi from "../apis/fakeStoreApi";

export const fetchProducts=()=> async(dispatch)=>{
  
    const response=await fakeStoreApi.get("/products");

    dispatch({
        type:"FETCH_PRODUCTS",
        payload: {
            data: response.data
        }
    });
   };
