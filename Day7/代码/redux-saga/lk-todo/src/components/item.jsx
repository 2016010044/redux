import React, {Component} from 'react'
import PropTypes from "prop-types";

import store from './../store/index'
import {getDelTodoAction, getChangeOneTodo} from './../store/actionCretors'

export default class Item extends Component{
    static propTypes = {
        todo: PropTypes.object.isRequired
    };

    constructor(props){
        super(props);

        this.state = {
            isShowDelBtn: false
        }
    }

    /**
     *  控制删除按钮的显示和隐藏
     * @param {boolean}flag
     */
    _hasShowBtn(flag){
        this.setState({
            isShowDelBtn: flag
        })
    }

    render() {
        const { todo } = this.props;
        const { isShowDelBtn } = this.state;
        /*鼠标进入和离开*/
        return (
            <li
               onMouseOver={()=> this._hasShowBtn(true)}
               onMouseOut={()=> this._hasShowBtn(false)}
            >
                <label>
                    <input
                        type="checkbox"
                        checked={todo.finished}
                        onChange={()=> this._dealChange(todo.id, !todo.finished)}/>
                    <span>{todo.title}</span>
                </label>
                <button
                    className="btn btn-warning"
                    style={{display: isShowDelBtn ?  "block" : "none"}}
                    onClick={()=>this._dealRemove(todo.id)}
                 >
                    删除
                </button>
            </li>
        )
    }

    _dealChange(todoId, flag){
        const action = getChangeOneTodo(todoId, flag);
        store.dispatch(action);
    }

    _dealRemove(todoId){
        const action = getDelTodoAction(todoId);
        store.dispatch(action);
    }
}