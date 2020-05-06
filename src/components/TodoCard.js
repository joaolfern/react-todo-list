import React from 'react'

function TodoCard(props) {
    const selectedStyle = {
        fontStyle: 'italic',
        textDecoration: 'line-through',
        opacity: '.8'
    }
    return (
        <div className="listItem">
            <div className="todo pointer"
                onClick={() => props.markTodo(props.data.id)}>
                <span>
                    <i className="fa fa-check"
                        style={
                            props.data.completed ?
                                { opacity: 1 } :
                                { opacity: 0 }
                        }
                    ></i>
                </span>
                <p className="unselectable todoText" style={
                    props.data.completed ?
                        selectedStyle :
                        null
                }>{props.data.text}</p>
            </div>
            <span className="deleteBtn" onClick={() => props.deleteTodo(props.data.id)}>
                <i className="fa fa-minus-circle pointer"></i>
            </span>
        </div>
    )
}

export default TodoCard
