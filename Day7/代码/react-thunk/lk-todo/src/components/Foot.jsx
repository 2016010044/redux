import React, {Component} from 'react'

import store from './../store/index'
import {getIsCheckedAllAction, getDelFinishedTodoAction} from './../store/actionCretors'

export default class Foot extends Component {
    constructor(props){
        super(props);
        this.state = store.getState();
    }

    componentDidMount() {
        store.subscribe(this._handleStoreChange);
    }

    _handleStoreChange = ()=>{
        this.setState(store.getState())
    };

    render() {
        const {todos, finishedCount} = this.state;
        return (
            <div className="todo-footer">
                <label>
                    <input
                        type="checkbox"
                        checked={finishedCount === todos.length && todos.length > 0}
                        onChange={()=> this._dealChecked(finishedCount !== todos.length)}
                    />
                </label>
                <span><span>已完成{finishedCount}件</span> / 总计{todos.length}件 </span>
                <button className="btn btn-warning" onClick={()=> this._dealRemove()}>清除已完成任务</button>
            </div>
        )
    }

    _dealChecked(flag){
        const action = getIsCheckedAllAction(flag);
        store.dispatch(action);
    }

    _dealRemove(){
        const action = getDelFinishedTodoAction();
        store.dispatch(action);
    }
}