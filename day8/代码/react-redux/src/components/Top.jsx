import React, {Component} from 'react'

import {getAddOneTodoAction} from './../store/actionCretors'
import {connect} from 'react-redux'

class Top extends Component{
    constructor(props) {
        super(props);
        this.myInputRef = React.createRef();
    }


    _handleKeyEvent(e){
        // 0. 初始化数据
        const {todos} = this.props;
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
            this.props.addOneTodo(todo);

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

const mapStateToProps = (state)=>{
    return {
        todos: state.todos
    }
};

const mapDispatchToProps = (dispatch)=>{
    return {
        addOneTodo(todo){
            const action = getAddOneTodoAction(todo);
            dispatch(action);
        }
    }
};

// export default Top;
export  default connect(mapStateToProps, mapDispatchToProps)(Top)