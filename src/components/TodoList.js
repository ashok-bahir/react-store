import React, { Component } from 'react';
import TodoItem from './TodoItem';

export default class TodoList extends Component {
    render() {
        const {items , clearList ,  handleDelete} = this.props
        return (
            <ul className="list-group">
                <h3 className="text-center">Todo List</h3>
                
                {
                    items.map(item => {
                        return(
                            <TodoItem key={item.id} title={item.title} handleDelete={ () => handleDelete(item.id)} />     
                        )
                    })
                }
                <button type="button" onClick={clearList} className="btn btn-danger"> clear list </button> 
            </ul>
        )
    }
}
