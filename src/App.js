import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import InputTodo from './components/InputTodo';
import TodoList from './components/TodoList';
import style from './css/reminder.css';

const App = (
    <div className={style.wrap}>
        <Header />
        <InputTodo />
        <TodoList />
    </div>
)
ReactDOM.render(App, document.querySelector("#app"))