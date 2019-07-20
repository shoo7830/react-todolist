import React from 'react';

const InputTodo = () => {
    return (
        <>
            <input 
                type="text"
                placeholder="할 일을 입력해보세요."
                name="todo"
                onChange={
                    (e) => {
                        console.log(e.target.value);
                    }
                }
            />
            <button>+</button>
        </>
    )
}

export default InputTodo;