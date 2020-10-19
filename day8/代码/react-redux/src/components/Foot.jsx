import React, {Component} from 'react'
import {getIsCheckedAllAction, getDelFinishedTodoAction, getAddOneTodoAction} from './../store/actionCretors'
import {connect} from "react-redux";

class Foot extends Component {
    constructor(props){
        super(props);
    }

    render() {
        const {todos, finishedCount, _dealChecked, _dealRemove} = this.props;
        return (
            <div className="todo-footer">
                <label>
                    <input
                        type="checkbox"
                        checked={finishedCount === todos.length && todos.length > 0}
                        onChange={()=> _dealChecked(finishedCount !== todos.length)}
                    />
                </label>
                <span><span>已完成{finishedCount}件</span> / 总计{todos.length}件 </span>
                <button className="btn btn-warning" onClick={()=> _dealRemove()}>清除已完成任务</button>
            </div>
        )
    }


}

const mapStateToProps = (state)=>{
    return {
        todos: state.todos,
        finishedCount:state.finishedCount
    }
};

const mapDispatchToProps = (dispatch)=>{
    return {
        _dealChecked(flag){
            const action = getIsCheckedAllAction(flag);
            dispatch(action);
        },

        _dealRemove(){
            const action = getDelFinishedTodoAction();
            dispatch(action);
        }
    }
};

// export default Foot;
export  default connect(mapStateToProps, mapDispatchToProps)(Foot)