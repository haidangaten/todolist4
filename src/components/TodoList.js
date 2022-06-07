import React, { useCallback } from 'react';


function TodoList(props) {
    const {todos,setTodos}=props;

    function handleDeleteClick({id}) {
       setTodos(todos.filter((todo)=>todo.id!==id));
       console.log(todos);
    }
    const handleCompleteClick=useCallback((todo)=> {
        setTodos(
            todos.map((item)=>{
                if(item.id===todo.id){
                    return {...item,completed: !item.completed};
                }
                return item;
            })
        )
    },[todos,setTodos]);

    return (
        <div className="input-group mb-3">
            {todos.map((todo)=>(
                <div className="input-group" key={todo.id}>
                    <input type="text" 
                     value={todo.title} 
                     className='form-control'                 
                    onChange={(e)=>e.preventDefault()}  />
                    <div className="input-group-append">
                    <button className="btn btn-success" type="button" onClick={()=>handleCompleteClick(todo)}>
                       <i className="fa fa-check"></i>
                    </button>
                    <button className="btn btn-danger" type="button" onClick={()=>handleDeleteClick(todo)}>
                    <i className="fa fa-trash"></i>
                    </button>
                    </div>
                </div>
            ))}

            
        </div>
    );
}

export default TodoList;