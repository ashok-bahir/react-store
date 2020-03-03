import React, { Component } from 'react'

export default class TodoInput extends Component {
    render() {
        const{ item, handleChange, handleSubmit} = this.props
        return (
            <div className="card">
                <div className="card-body"> 
                    <form onSubmit={handleSubmit}>  
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text text-white bg-primary" id="basic-addon1"><i className="fa fa-book"></i></span>
                            </div>
                            <input type="text" className="form-control " placeholder="Add a Todo Item" aria-label="Username" aria-describedby="basic-addon1" value={item} onChange={handleChange} />
                        </div>
                        <button type="submit" className="btn btn-block btn-primary">Add Item</button>
                    </form>
            </div>
        </div>
        )
    }
}
