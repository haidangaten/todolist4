import React from 'react';
import {v4 as uuidv4} from 'uuid';


function TodoForm(props) {
    const {input,setInput,todos,setTodos}=props;

    const onInputChange = (e)=>{
        setInput(e.target.value);
    };
    const onFormSubmit =(e)=>{
        e.preventDefault();
        setTodos([{id:uuidv4(),title:input,completed:false},...todos]);
        setInput("");
    };
    return (
        <form onSubmit={onFormSubmit} className='row g-3'>
            <div className='col-auto' style={{paddingBottom:'10px'}}>
            <input 
            type="text" 
            placeholder='Nhập việc cần làm'  
            className="form-control" 
            value={input}
            required
            onChange={onInputChange}/>
            </div>
            <div className='col-auto'>
            <button className='btn btn-primary' type='submit'>Add</button>
            </div>
            
        </form>
    );
}

export default TodoForm;