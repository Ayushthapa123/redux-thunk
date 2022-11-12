import React, {useState,useEffect} from 'react';
import { useDispatch,useSelector } from 'react-redux';

import { fetchProducts } from '../actions/productActions';

import { addTodo,removeTodo } from '../actions';

export default function Todo() {
 const [inputData, setInputData]=useState(' ');

 const lists =useSelector((stores)=>stores.todoReducers);

 const productlists =useSelector((stores)=>stores);

 console.log("productlists",productlists.productReducer);



 const dispatch=useDispatch();


  return (
    <div>
        <h2>Todo App</h2>
        <input value={inputData} onChange={(e)=>setInputData(e.target.value)}/>
        <button onClick={()=>dispatch(addTodo(inputData))}>Add</button>

        {lists && <div>
          {lists.list.map((l,index)=>(
            <div key={index}>
<p>{l.data}</p>
            </div>
          ))}
          </div>}

          <button onClick={(e)=>dispatch(fetchProducts())}>Fetch Data</button>
    </div>
  )
}
