import React, {Component} from 'react'

import store from './../store/index'
import {getAddOneTodoAction} from './../store/actionCretors'

export default class Top extends Component{
    constructor(props) {
        super(props);
        this.myInputRef = React.createRef();

        // 初始化state
        this.state = store.getState();
    }

    componentDidMount() {
        store.subscribe(this._handleStoreChange);
    }

    _handleStoreChange = ()=>{
         this.setState(store.getState())
    };

    _handleKeyEvent(e){
        // 0. 初始化数据
        const {todos} = this.state;
        const lastTodoId = todos.length === 0 ? 0 : todos[todos.length - 1].id;

        // 1. 判断是否是回车
        if(13 === e.keyCode){
            // 2. 判断输入的内容是否为空
            const value = this.myInputRef.current.value;
            if(!value.trim()){
                alert('输入的内容不能为空');
                return;
            }

            // 3. 创建一个TODO对象，并返回
            let todo = {id: lastTodoId + 1, title: value, finished: false};

            const action = getAddOneTodoAction(todo);
            store.dispatch(action);

            // 4. 清除输入框中的内容
            this.myInputRef.current.value = '';
        }
    }

    render() {
        return (
            <div className="todo-header">
                <input
                    ref = {this.myInputRef}
                    type="text"
                    placeholder="请输入今天的任务清单，按回车键确认"
                    onKeyDown={(e)=>this._handleKeyEvent(e)}
                />
            </div>
        )
    }
}