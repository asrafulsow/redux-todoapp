import React from 'react';
import cancel from "../../images/cancel.png"
import Todo from '../Todo/Todo';
const TodoItems = () => {
    return (
        <div
            className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto"
        >
            <Todo />
        </div>
    );
};

export default TodoItems;