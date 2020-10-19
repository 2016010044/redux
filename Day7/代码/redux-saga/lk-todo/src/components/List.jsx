import React, {Component} from 'react'
import Item from "./item"
import store from './../store/index'

export default class List extends Component {
    constructor(props){
        super(props);
        // 获取state中的todo
        this.state = store.getState();
    }

    componentDidMount() {
        store.subscribe(this._handleStoreChange);
    }

    _handleStoreChange = ()=>{
        this.setState(store.getState())
    };

    render() {
        const {todos} = this.state;
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