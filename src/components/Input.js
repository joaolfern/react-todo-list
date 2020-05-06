import React from 'react'



function Input(props) {
    return (
        <form className="inputContainer" onSubmit={props.handleAdding}>
            <h1 className="unselectable">To Do List</h1>
            <input type="text" id="textInput"
                className="textInput inputBar"
                value={props.text} onChange={props.handleTyping} />
            <button className="addBtn inputBar pointer"><span>add</span></button>
        </form>
    )
}

export default Input