import React, {Component} from 'react'
import Item from "./item"
import {connect} from 'react-redux'

class List extends Component {
    constructor(props){
        super(props);
    }

    render() {
        const {todos} = this.props;
        return (
            <ul className="todo-main">
                {
                    todos.map((todo, index) => (
                        <Item
                            key={todo.id}
                            todo={todo}
                        />
                    ))
                }
            </ul>
        )
    }
}

const mapStateToProps = (state)=>{
    return {
        todos: state.todos
    }
};

// export default Top;
export  default connect(mapStateToProps, null)(List)